import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObjectExpiration } from "./objectexpiration";


// UpdateGroupRequest
/** 
 * Request model for updating group's metadata
**/
export class UpdateGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=expiration" })
  expiration?: ObjectExpiration;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
