import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GenerateDataKeyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CiphertextBlob" })
  ciphertextBlob?: string;

  @Metadata({ data: "json, name=KeyId" })
  keyId?: string;

  @Metadata({ data: "json, name=Plaintext" })
  plaintext?: string;
}
