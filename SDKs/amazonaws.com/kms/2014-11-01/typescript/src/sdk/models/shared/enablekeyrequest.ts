import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnableKeyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=KeyId" })
  keyId: string;
}
