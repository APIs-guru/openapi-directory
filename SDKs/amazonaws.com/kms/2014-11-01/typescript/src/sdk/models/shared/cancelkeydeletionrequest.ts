import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CancelKeyDeletionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KeyId" })
  keyId: string;
}
