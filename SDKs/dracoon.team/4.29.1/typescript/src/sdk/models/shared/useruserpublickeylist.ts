import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserUserPublicKeyOutput } from "./useruserpublickey";



// UserUserPublicKeyListOutput
/** 
 * List of user public keys
**/
export class UserUserPublicKeyListOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: UserUserPublicKeyOutput })
  items: UserUserPublicKeyOutput[];
}
