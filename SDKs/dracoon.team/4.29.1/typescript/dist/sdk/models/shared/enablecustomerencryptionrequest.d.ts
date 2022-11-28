import { SpeakeasyBase } from "../../../internal/utils";
import { UserKeyPairContainer } from "./userkeypaircontainer";
/**
 * Request model for enabling customer encryption
**/
export declare class EnableCustomerEncryptionRequest extends SpeakeasyBase {
    dataSpaceRescueKey: UserKeyPairContainer;
    enableCustomerEncryption: boolean;
}
