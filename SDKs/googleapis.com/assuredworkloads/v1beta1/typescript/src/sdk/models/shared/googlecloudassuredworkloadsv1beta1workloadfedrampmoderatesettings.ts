import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssuredworkloadsV1beta1WorkloadKmsSettings } from "./googlecloudassuredworkloadsv1beta1workloadkmssettings";



// GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampModerateSettings
/** 
 * Settings specific to resources needed for FedRAMP Moderate.
**/
export class GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampModerateSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kmsSettings" })
  kmsSettings?: GoogleCloudAssuredworkloadsV1beta1WorkloadKmsSettings;
}
