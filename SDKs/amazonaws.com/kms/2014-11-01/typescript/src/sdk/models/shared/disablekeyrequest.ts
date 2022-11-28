import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DisableKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KeyId" })
  keyId: string;
}
