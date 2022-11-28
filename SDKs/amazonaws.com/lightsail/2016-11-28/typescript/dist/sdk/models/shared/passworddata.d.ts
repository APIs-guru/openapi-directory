import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The password data for the Windows Server-based instance, including the ciphertext and the key pair name.
**/
export declare class PasswordData extends SpeakeasyBase {
    ciphertext?: string;
    keyPairName?: string;
}
