import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EncryptionAlgorithmSpecEnum } from "./encryptionalgorithmspecenum";


export class EncryptRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EncryptionAlgorithm" })
  encryptionAlgorithm?: EncryptionAlgorithmSpecEnum;

  @Metadata({ data: "json, name=EncryptionContext" })
  encryptionContext?: Map<string, string>;

  @Metadata({ data: "json, name=GrantTokens" })
  grantTokens?: string[];

  @Metadata({ data: "json, name=KeyId" })
  keyId: string;

  @Metadata({ data: "json, name=Plaintext" })
  plaintext: string;
}
