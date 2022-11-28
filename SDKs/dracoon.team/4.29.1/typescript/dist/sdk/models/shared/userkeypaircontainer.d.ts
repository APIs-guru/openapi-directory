import { SpeakeasyBase } from "../../../internal/utils";
import { PrivateKeyContainer } from "./privatekeycontainer";
import { PublicKeyContainer } from "./publickeycontainer";
import { PrivateKeyContainerOutput } from "./privatekeycontainer";
import { PublicKeyContainerOutput } from "./publickeycontainer";
/**
 * Key pair container
**/
export declare class UserKeyPairContainer extends SpeakeasyBase {
    privateKeyContainer: PrivateKeyContainer;
    publicKeyContainer: PublicKeyContainer;
}
/**
 * Key pair container
**/
export declare class UserKeyPairContainerOutput extends SpeakeasyBase {
    privateKeyContainer: PrivateKeyContainerOutput;
    publicKeyContainer: PublicKeyContainerOutput;
}
