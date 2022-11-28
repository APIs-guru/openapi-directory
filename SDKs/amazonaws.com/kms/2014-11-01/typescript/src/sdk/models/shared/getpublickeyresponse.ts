import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomerMasterKeySpecEnum } from "./customermasterkeyspecenum";
import { EncryptionAlgorithmSpecEnum } from "./encryptionalgorithmspecenum";
import { KeySpecEnum } from "./keyspecenum";
import { KeyUsageTypeEnum } from "./keyusagetypeenum";
import { SigningAlgorithmSpecEnum } from "./signingalgorithmspecenum";



export class GetPublicKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CustomerMasterKeySpec" })
  customerMasterKeySpec?: CustomerMasterKeySpecEnum;

  @SpeakeasyMetadata({ data: "json, name=EncryptionAlgorithms" })
  encryptionAlgorithms?: EncryptionAlgorithmSpecEnum[];

  @SpeakeasyMetadata({ data: "json, name=KeyId" })
  keyId?: string;

  @SpeakeasyMetadata({ data: "json, name=KeySpec" })
  keySpec?: KeySpecEnum;

  @SpeakeasyMetadata({ data: "json, name=KeyUsage" })
  keyUsage?: KeyUsageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=PublicKey" })
  publicKey?: string;

  @SpeakeasyMetadata({ data: "json, name=SigningAlgorithms" })
  signingAlgorithms?: SigningAlgorithmSpecEnum[];
}
