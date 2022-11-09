import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PrivateKeyContainer } from "./privatekeycontainer";
import { PublicKeyContainer } from "./publickeycontainer";


// UserKeyPairContainer
/** 
 * Key pair container
**/
export class UserKeyPairContainer extends SpeakeasyBase {
  @Metadata({ data: "json, name=privateKeyContainer" })
  privateKeyContainer: PrivateKeyContainer;

  @Metadata({ data: "json, name=publicKeyContainer" })
  publicKeyContainer: PublicKeyContainer;
}
