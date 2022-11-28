import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EncryptionAlgorithmSpecEnum } from "./encryptionalgorithmspecenum";



export class ReEncryptResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CiphertextBlob" })
  ciphertextBlob?: string;

  @SpeakeasyMetadata({ data: "json, name=DestinationEncryptionAlgorithm" })
  destinationEncryptionAlgorithm?: EncryptionAlgorithmSpecEnum;

  @SpeakeasyMetadata({ data: "json, name=KeyId" })
  keyId?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceEncryptionAlgorithm" })
  sourceEncryptionAlgorithm?: EncryptionAlgorithmSpecEnum;

  @SpeakeasyMetadata({ data: "json, name=SourceKeyId" })
  sourceKeyId?: string;
}
