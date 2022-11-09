import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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


// KeyMetadata
/** 
 * <p>Contains metadata about a KMS key.</p> <p>This data type is used as a response element for the <a>CreateKey</a> and <a>DescribeKey</a> operations.</p>
**/
export class KeyMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=AWSAccountId" })
  awsAccountId?: string;

  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=CloudHsmClusterId" })
  cloudHsmClusterId?: string;

  @Metadata({ data: "json, name=CreationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=CustomKeyStoreId" })
  customKeyStoreId?: string;

  @Metadata({ data: "json, name=CustomerMasterKeySpec" })
  customerMasterKeySpec?: CustomerMasterKeySpecEnum;

  @Metadata({ data: "json, name=DeletionDate" })
  deletionDate?: Date;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=EncryptionAlgorithms" })
  encryptionAlgorithms?: EncryptionAlgorithmSpecEnum[];

  @Metadata({ data: "json, name=ExpirationModel" })
  expirationModel?: ExpirationModelTypeEnum;

  @Metadata({ data: "json, name=KeyId" })
  keyId: string;

  @Metadata({ data: "json, name=KeyManager" })
  keyManager?: KeyManagerTypeEnum;

  @Metadata({ data: "json, name=KeySpec" })
  keySpec?: KeySpecEnum;

  @Metadata({ data: "json, name=KeyState" })
  keyState?: KeyStateEnum;

  @Metadata({ data: "json, name=KeyUsage" })
  keyUsage?: KeyUsageTypeEnum;

  @Metadata({ data: "json, name=MultiRegion" })
  multiRegion?: boolean;

  @Metadata({ data: "json, name=MultiRegionConfiguration" })
  multiRegionConfiguration?: MultiRegionConfiguration;

  @Metadata({ data: "json, name=Origin" })
  origin?: OriginTypeEnum;

  @Metadata({ data: "json, name=PendingDeletionWindowInDays" })
  pendingDeletionWindowInDays?: number;

  @Metadata({ data: "json, name=SigningAlgorithms" })
  signingAlgorithms?: SigningAlgorithmSpecEnum[];

  @Metadata({ data: "json, name=ValidTo" })
  validTo?: Date;
}
