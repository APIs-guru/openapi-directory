import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EnableKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KeyId" })
  keyId: string;
}
