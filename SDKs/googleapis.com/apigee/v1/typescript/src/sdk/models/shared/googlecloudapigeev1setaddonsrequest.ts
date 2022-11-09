import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudApigeeV1AddonsConfig } from "./googlecloudapigeev1addonsconfig";


// GoogleCloudApigeeV1SetAddonsRequest
/** 
 * Request for SetAddons.
**/
export class GoogleCloudApigeeV1SetAddonsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=addonsConfig" })
  addonsConfig?: GoogleCloudApigeeV1AddonsConfig;
}
