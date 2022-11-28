import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerMasterKeySpecEnum } from "./customermasterkeyspecenum";
import { EncryptionAlgorithmSpecEnum } from "./encryptionalgorithmspecenum";
import { KeySpecEnum } from "./keyspecenum";
import { KeyUsageTypeEnum } from "./keyusagetypeenum";
import { SigningAlgorithmSpecEnum } from "./signingalgorithmspecenum";
export declare class GetPublicKeyResponse extends SpeakeasyBase {
    customerMasterKeySpec?: CustomerMasterKeySpecEnum;
    encryptionAlgorithms?: EncryptionAlgorithmSpecEnum[];
    keyId?: string;
    keySpec?: KeySpecEnum;
    keyUsage?: KeyUsageTypeEnum;
    publicKey?: string;
    signingAlgorithms?: SigningAlgorithmSpecEnum[];
}
