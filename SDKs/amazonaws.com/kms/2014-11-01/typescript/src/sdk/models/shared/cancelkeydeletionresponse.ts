import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CancelKeyDeletionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=KeyId" })
  keyId?: string;
}
