import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EncryptionAlgorithmSpecEnum } from "./encryptionalgorithmspecenum";


export class EncryptResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CiphertextBlob" })
  ciphertextBlob?: string;

  @Metadata({ data: "json, name=EncryptionAlgorithm" })
  encryptionAlgorithm?: EncryptionAlgorithmSpecEnum;

  @Metadata({ data: "json, name=KeyId" })
  keyId?: string;
}
