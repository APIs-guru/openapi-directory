import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsEcsTaskDefinitionInferenceAcceleratorsDetails
/** 
 * An Elastic Inference accelerator to use for the containers in the task.
**/
export class AwsEcsTaskDefinitionInferenceAcceleratorsDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeviceName" })
  deviceName?: string;

  @Metadata({ data: "json, name=DeviceType" })
  deviceType?: string;
}
