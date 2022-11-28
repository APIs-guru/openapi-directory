import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=AWSAccountId" })
  awsAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=CloudHsmClusterId" })
  cloudHsmClusterId?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=CustomKeyStoreId" })
  customKeyStoreId?: string;

  @SpeakeasyMetadata({ data: "json, name=CustomerMasterKeySpec" })
  customerMasterKeySpec?: CustomerMasterKeySpecEnum;

  @SpeakeasyMetadata({ data: "json, name=DeletionDate" })
  deletionDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EncryptionAlgorithms" })
  encryptionAlgorithms?: EncryptionAlgorithmSpecEnum[];

  @SpeakeasyMetadata({ data: "json, name=ExpirationModel" })
  expirationModel?: ExpirationModelTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=KeyId" })
  keyId: string;

  @SpeakeasyMetadata({ data: "json, name=KeyManager" })
  keyManager?: KeyManagerTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=KeySpec" })
  keySpec?: KeySpecEnum;

  @SpeakeasyMetadata({ data: "json, name=KeyState" })
  keyState?: KeyStateEnum;

  @SpeakeasyMetadata({ data: "json, name=KeyUsage" })
  keyUsage?: KeyUsageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=MultiRegion" })
  multiRegion?: boolean;

  @SpeakeasyMetadata({ data: "json, name=MultiRegionConfiguration" })
  multiRegionConfiguration?: MultiRegionConfiguration;

  @SpeakeasyMetadata({ data: "json, name=Origin" })
  origin?: OriginTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=PendingDeletionWindowInDays" })
  pendingDeletionWindowInDays?: number;

  @SpeakeasyMetadata({ data: "json, name=SigningAlgorithms" })
  signingAlgorithms?: SigningAlgorithmSpecEnum[];

  @SpeakeasyMetadata({ data: "json, name=ValidTo" })
  validTo?: Date;
}
