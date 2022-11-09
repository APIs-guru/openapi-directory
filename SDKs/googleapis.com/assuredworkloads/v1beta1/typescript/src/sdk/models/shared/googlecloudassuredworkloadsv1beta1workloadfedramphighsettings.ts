import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudAssuredworkloadsV1beta1WorkloadKmsSettings } from "./googlecloudassuredworkloadsv1beta1workloadkmssettings";


// GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampHighSettings
/** 
 * Settings specific to resources needed for FedRAMP High.
**/
export class GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampHighSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=kmsSettings" })
  kmsSettings?: GoogleCloudAssuredworkloadsV1beta1WorkloadKmsSettings;
}
