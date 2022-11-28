import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerMasterKeySpecEnum } from "./customermasterkeyspecenum";
import { EncryptionAlgorithmSpecEnum } from "./encryptionalgorithmspecenum";
import { ExpirationModelTypeEnum } from "./expirationmodeltypeenum";
import { KeyManagerTypeEnum } from "./keymanagertypeenum";
import { KeySpecEnum } from "./keyspecenum";
import { KeyStateEnum } from "./keystateenum";
import { KeyUsageTypeEnum } from "./keyusagetypeenum";
import { MultiRegionConfiguration } from "./multiregionconfiguration";
import { OriginTypeEnum } from "./origintypeenum";
import { SigningAlgorithmSpecEnum } from "./signingalgorithmspecenum";
/**
 * <p>Contains metadata about a KMS key.</p> <p>This data type is used as a response element for the <a>CreateKey</a> and <a>DescribeKey</a> operations.</p>
**/
export declare class KeyMetadata extends SpeakeasyBase {
    awsAccountId?: string;
    arn?: string;
    cloudHsmClusterId?: string;
    creationDate?: Date;
    customKeyStoreId?: string;
    customerMasterKeySpec?: CustomerMasterKeySpecEnum;
    deletionDate?: Date;
    description?: string;
    enabled?: boolean;
    encryptionAlgorithms?: EncryptionAlgorithmSpecEnum[];
    expirationModel?: ExpirationModelTypeEnum;
    keyId: string;
    keyManager?: KeyManagerTypeEnum;
    keySpec?: KeySpecEnum;
    keyState?: KeyStateEnum;
    keyUsage?: KeyUsageTypeEnum;
    multiRegion?: boolean;
    multiRegionConfiguration?: MultiRegionConfiguration;
    origin?: OriginTypeEnum;
    pendingDeletionWindowInDays?: number;
    signingAlgorithms?: SigningAlgorithmSpecEnum[];
    validTo?: Date;
}
