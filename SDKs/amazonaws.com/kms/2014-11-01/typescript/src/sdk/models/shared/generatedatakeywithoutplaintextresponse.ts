import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GenerateDataKeyWithoutPlaintextResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CiphertextBlob" })
  ciphertextBlob?: string;

  @SpeakeasyMetadata({ data: "json, name=KeyId" })
  keyId?: string;
}
