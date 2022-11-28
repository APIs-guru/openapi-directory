import { SpeakeasyBase } from "../../../internal/utils";
import { PrivateKeyContainer } from "./privatekeycontainer";
import { PublicKeyContainer } from "./publickeycontainer";
/**
 * Request model for creating a key pair
**/
export declare class CreateKeyPairRequest extends SpeakeasyBase {
    previousPrivateKey: PrivateKeyContainer;
    privateKeyContainer: PrivateKeyContainer;
    publicKeyContainer: PublicKeyContainer;
}
