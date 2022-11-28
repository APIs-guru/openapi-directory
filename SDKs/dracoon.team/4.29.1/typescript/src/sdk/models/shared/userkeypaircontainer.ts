import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PrivateKeyContainer } from "./privatekeycontainer";
import { PublicKeyContainer } from "./publickeycontainer";
import { PrivateKeyContainerOutput } from "./privatekeycontainer";
import { PublicKeyContainerOutput } from "./publickeycontainer";



// UserKeyPairContainer
/** 
 * Key pair container
**/
export class UserKeyPairContainer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=privateKeyContainer" })
  privateKeyContainer: PrivateKeyContainer;

  @SpeakeasyMetadata({ data: "json, name=publicKeyContainer" })
  publicKeyContainer: PublicKeyContainer;
}


// UserKeyPairContainerOutput
/** 
 * Key pair container
**/
export class UserKeyPairContainerOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=privateKeyContainer" })
  privateKeyContainer: PrivateKeyContainerOutput;

  @SpeakeasyMetadata({ data: "json, name=publicKeyContainer" })
  publicKeyContainer: PublicKeyContainerOutput;
}
