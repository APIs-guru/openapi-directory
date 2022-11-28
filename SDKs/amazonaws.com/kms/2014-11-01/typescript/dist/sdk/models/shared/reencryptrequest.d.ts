import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionAlgorithmSpecEnum } from "./encryptionalgorithmspecenum";
export declare class ReEncryptRequest extends SpeakeasyBase {
    ciphertextBlob: string;
    destinationEncryptionAlgorithm?: EncryptionAlgorithmSpecEnum;
    destinationEncryptionContext?: Map<string, string>;
    destinationKeyId: string;
    grantTokens?: string[];
    sourceEncryptionAlgorithm?: EncryptionAlgorithmSpecEnum;
    sourceEncryptionContext?: Map<string, string>;
    sourceKeyId?: string;
}
