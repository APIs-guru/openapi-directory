import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CancelKeyDeletionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=KeyId" })
  keyId: string;
}
