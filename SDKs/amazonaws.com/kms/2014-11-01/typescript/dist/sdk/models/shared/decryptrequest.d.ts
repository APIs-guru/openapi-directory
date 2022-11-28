import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionAlgorithmSpecEnum } from "./encryptionalgorithmspecenum";
export declare class DecryptRequest extends SpeakeasyBase {
    ciphertextBlob: string;
    encryptionAlgorithm?: EncryptionAlgorithmSpecEnum;
    encryptionContext?: Map<string, string>;
    grantTokens?: string[];
    keyId?: string;
}
