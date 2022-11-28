import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsEcsTaskDefinitionInferenceAcceleratorsDetails
/** 
 * An Elastic Inference accelerator to use for the containers in the task.
**/
export class AwsEcsTaskDefinitionInferenceAcceleratorsDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeviceName" })
  deviceName?: string;

  @SpeakeasyMetadata({ data: "json, name=DeviceType" })
  deviceType?: string;
}
