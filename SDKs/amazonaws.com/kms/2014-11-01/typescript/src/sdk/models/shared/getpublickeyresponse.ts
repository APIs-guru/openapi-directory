import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomerMasterKeySpecEnum } from "./customermasterkeyspecenum";
import { EncryptionAlgorithmSpecEnum } from "./encryptionalgorithmspecenum";
import { KeySpecEnum } from "./keyspecenum";
import { KeyUsageTypeEnum } from "./keyusagetypeenum";
import { SigningAlgorithmSpecEnum } from "./signingalgorithmspecenum";


export class GetPublicKeyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CustomerMasterKeySpec" })
  customerMasterKeySpec?: CustomerMasterKeySpecEnum;

  @Metadata({ data: "json, name=EncryptionAlgorithms" })
  encryptionAlgorithms?: EncryptionAlgorithmSpecEnum[];

  @Metadata({ data: "json, name=KeyId" })
  keyId?: string;

  @Metadata({ data: "json, name=KeySpec" })
  keySpec?: KeySpecEnum;

  @Metadata({ data: "json, name=KeyUsage" })
  keyUsage?: KeyUsageTypeEnum;

  @Metadata({ data: "json, name=PublicKey" })
  publicKey?: string;

  @Metadata({ data: "json, name=SigningAlgorithms" })
  signingAlgorithms?: SigningAlgorithmSpecEnum[];
}
