import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EncryptionAlgorithmSpecEnum } from "./encryptionalgorithmspecenum";
import { EncryptionAlgorithmSpecEnum } from "./encryptionalgorithmspecenum";


export class ReEncryptResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CiphertextBlob" })
  ciphertextBlob?: string;

  @Metadata({ data: "json, name=DestinationEncryptionAlgorithm" })
  destinationEncryptionAlgorithm?: EncryptionAlgorithmSpecEnum;

  @Metadata({ data: "json, name=KeyId" })
  keyId?: string;

  @Metadata({ data: "json, name=SourceEncryptionAlgorithm" })
  sourceEncryptionAlgorithm?: EncryptionAlgorithmSpecEnum;

  @Metadata({ data: "json, name=SourceKeyId" })
  sourceKeyId?: string;
}
