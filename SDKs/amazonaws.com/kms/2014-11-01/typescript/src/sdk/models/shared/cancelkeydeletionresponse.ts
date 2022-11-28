import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CancelKeyDeletionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KeyId" })
  keyId?: string;
}
