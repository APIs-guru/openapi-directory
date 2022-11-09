import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PrivateKeyContainer } from "./privatekeycontainer";
import { PrivateKeyContainer } from "./privatekeycontainer";
import { PublicKeyContainer } from "./publickeycontainer";


// CreateKeyPairRequest
/** 
 * Request model for creating a key pair
**/
export class CreateKeyPairRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=previousPrivateKey" })
  previousPrivateKey: PrivateKeyContainer;

  @Metadata({ data: "json, name=privateKeyContainer" })
  privateKeyContainer: PrivateKeyContainer;

  @Metadata({ data: "json, name=publicKeyContainer" })
  publicKeyContainer: PublicKeyContainer;
}
