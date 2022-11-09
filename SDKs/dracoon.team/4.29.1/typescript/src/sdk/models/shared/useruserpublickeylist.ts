import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserUserPublicKey } from "./useruserpublickey";


// UserUserPublicKeyList
/** 
 * List of user public keys
**/
export class UserUserPublicKeyList extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.UserUserPublicKey })
  items: UserUserPublicKey[];
}
