import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PublicKeyContainer } from "./publickeycontainer";


// UserUserPublicKey
/** 
 * Public key information
**/
export class UserUserPublicKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=publicKeyContainer" })
  publicKeyContainer?: PublicKeyContainer;
}
