import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudAssuredworkloadsV1beta1WorkloadKmsSettings } from "./googlecloudassuredworkloadsv1beta1workloadkmssettings";


// GoogleCloudAssuredworkloadsV1beta1WorkloadIl4Settings
/** 
 * Settings specific to resources needed for IL4.
**/
export class GoogleCloudAssuredworkloadsV1beta1WorkloadIl4Settings extends SpeakeasyBase {
  @Metadata({ data: "json, name=kmsSettings" })
  kmsSettings?: GoogleCloudAssuredworkloadsV1beta1WorkloadKmsSettings;
}
