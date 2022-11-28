import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EncryptionAlgorithmSpecEnum } from "./encryptionalgorithmspecenum";



export class DecryptRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CiphertextBlob" })
  ciphertextBlob: string;

  @SpeakeasyMetadata({ data: "json, name=EncryptionAlgorithm" })
  encryptionAlgorithm?: EncryptionAlgorithmSpecEnum;

  @SpeakeasyMetadata({ data: "json, name=EncryptionContext" })
  encryptionContext?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=GrantTokens" })
  grantTokens?: string[];

  @SpeakeasyMetadata({ data: "json, name=KeyId" })
  keyId?: string;
}
