import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PrivateKeyContainer } from "./privatekeycontainer";
import { PublicKeyContainer } from "./publickeycontainer";



// CreateKeyPairRequest
/** 
 * Request model for creating a key pair
**/
export class CreateKeyPairRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=previousPrivateKey" })
  previousPrivateKey: PrivateKeyContainer;

  @SpeakeasyMetadata({ data: "json, name=privateKeyContainer" })
  privateKeyContainer: PrivateKeyContainer;

  @SpeakeasyMetadata({ data: "json, name=publicKeyContainer" })
  publicKeyContainer: PublicKeyContainer;
}
