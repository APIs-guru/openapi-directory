import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1AddonsConfigInput } from "./googlecloudapigeev1addonsconfig";



// GoogleCloudApigeeV1SetAddonsRequestInput
/** 
 * Request for SetAddons.
**/
export class GoogleCloudApigeeV1SetAddonsRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addonsConfig" })
  addonsConfig?: GoogleCloudApigeeV1AddonsConfigInput;
}
