import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionAlgorithmSpecEnum } from "./encryptionalgorithmspecenum";
export declare class ReEncryptResponse extends SpeakeasyBase {
    ciphertextBlob?: string;
    destinationEncryptionAlgorithm?: EncryptionAlgorithmSpecEnum;
    keyId?: string;
    sourceEncryptionAlgorithm?: EncryptionAlgorithmSpecEnum;
    sourceKeyId?: string;
}
