import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssuredworkloadsV1beta1WorkloadKmsSettings } from "./googlecloudassuredworkloadsv1beta1workloadkmssettings";



// GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampHighSettings
/** 
 * Settings specific to resources needed for FedRAMP High.
**/
export class GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampHighSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kmsSettings" })
  kmsSettings?: GoogleCloudAssuredworkloadsV1beta1WorkloadKmsSettings;
}
