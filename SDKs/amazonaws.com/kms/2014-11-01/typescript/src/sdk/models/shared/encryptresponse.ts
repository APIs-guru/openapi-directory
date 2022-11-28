import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EncryptionAlgorithmSpecEnum } from "./encryptionalgorithmspecenum";



export class EncryptResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CiphertextBlob" })
  ciphertextBlob?: string;

  @SpeakeasyMetadata({ data: "json, name=EncryptionAlgorithm" })
  encryptionAlgorithm?: EncryptionAlgorithmSpecEnum;

  @SpeakeasyMetadata({ data: "json, name=KeyId" })
  keyId?: string;
}
