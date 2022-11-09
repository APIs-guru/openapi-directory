import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudAssuredworkloadsV1beta1WorkloadKmsSettings
/** 
 * Settings specific to the Key Management Service.
**/
export class GoogleCloudAssuredworkloadsV1beta1WorkloadKmsSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextRotationTime" })
  nextRotationTime?: string;

  @Metadata({ data: "json, name=rotationPeriod" })
  rotationPeriod?: string;
}
