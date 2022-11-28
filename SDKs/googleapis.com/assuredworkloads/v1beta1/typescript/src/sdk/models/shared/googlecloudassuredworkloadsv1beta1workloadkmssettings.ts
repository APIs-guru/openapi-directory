import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudAssuredworkloadsV1beta1WorkloadKmsSettings
/** 
 * Settings specific to the Key Management Service.
**/
export class GoogleCloudAssuredworkloadsV1beta1WorkloadKmsSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextRotationTime" })
  nextRotationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=rotationPeriod" })
  rotationPeriod?: string;
}
