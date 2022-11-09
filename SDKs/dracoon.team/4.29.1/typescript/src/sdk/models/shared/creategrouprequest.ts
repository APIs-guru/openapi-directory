import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObjectExpiration } from "./objectexpiration";


// CreateGroupRequest
/** 
 * Request model for creating a group
**/
export class CreateGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=expiration" })
  expiration?: ObjectExpiration;

  @Metadata({ data: "json, name=name" })
  name: string;
}
