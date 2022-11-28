import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GenerateDataKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CiphertextBlob" })
  ciphertextBlob?: string;

  @SpeakeasyMetadata({ data: "json, name=KeyId" })
  keyId?: string;

  @SpeakeasyMetadata({ data: "json, name=Plaintext" })
  plaintext?: string;
}
