import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OsImage } from "./osimage";


// FetchInstanceProvisioningSettingsResponse
/** 
 * Response with all provisioning settings.
**/
export class FetchInstanceProvisioningSettingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=images", elemType: shared.OsImage })
  images?: OsImage[];
}
