import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudAssuredworkloadsV1beta1WorkloadKmsSettings } from "./googlecloudassuredworkloadsv1beta1workloadkmssettings";


// GoogleCloudAssuredworkloadsV1beta1WorkloadCjisSettings
/** 
 * Settings specific to resources needed for CJIS.
**/
export class GoogleCloudAssuredworkloadsV1beta1WorkloadCjisSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=kmsSettings" })
  kmsSettings?: GoogleCloudAssuredworkloadsV1beta1WorkloadKmsSettings;
}
