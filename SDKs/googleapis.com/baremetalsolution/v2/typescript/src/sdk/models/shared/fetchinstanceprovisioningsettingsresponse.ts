import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OsImage } from "./osimage";



// FetchInstanceProvisioningSettingsResponse
/** 
 * Response with all provisioning settings.
**/
export class FetchInstanceProvisioningSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=images", elemType: OsImage })
  images?: OsImage[];
}
