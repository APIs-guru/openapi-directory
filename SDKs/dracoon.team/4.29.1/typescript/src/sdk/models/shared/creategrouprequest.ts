import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObjectExpiration } from "./objectexpiration";



// CreateGroupRequest
/** 
 * Request model for creating a group
**/
export class CreateGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expiration" })
  expiration?: ObjectExpiration;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
