import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class QueuePlayPointer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contentIdentifier" })
  contentIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=offsetInMillis" })
  offsetInMillis?: number;
}
