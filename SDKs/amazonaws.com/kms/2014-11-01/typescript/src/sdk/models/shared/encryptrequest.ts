import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EncryptionAlgorithmSpecEnum } from "./encryptionalgorithmspecenum";



export class EncryptRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EncryptionAlgorithm" })
  encryptionAlgorithm?: EncryptionAlgorithmSpecEnum;

  @SpeakeasyMetadata({ data: "json, name=EncryptionContext" })
  encryptionContext?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=GrantTokens" })
  grantTokens?: string[];

  @SpeakeasyMetadata({ data: "json, name=KeyId" })
  keyId: string;

  @SpeakeasyMetadata({ data: "json, name=Plaintext" })
  plaintext: string;
}
