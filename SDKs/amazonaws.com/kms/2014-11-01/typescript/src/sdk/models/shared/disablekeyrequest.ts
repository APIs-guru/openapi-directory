import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DisableKeyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=KeyId" })
  keyId: string;
}
