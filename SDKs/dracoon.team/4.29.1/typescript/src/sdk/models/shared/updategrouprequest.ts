import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObjectExpiration } from "./objectexpiration";



// UpdateGroupRequest
/** 
 * Request model for updating group's metadata
**/
export class UpdateGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expiration" })
  expiration?: ObjectExpiration;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
