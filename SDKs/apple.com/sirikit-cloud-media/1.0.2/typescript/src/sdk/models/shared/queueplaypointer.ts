import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class QueuePlayPointer extends SpeakeasyBase {
  @Metadata({ data: "json, name=contentIdentifier" })
  contentIdentifier?: string;

  @Metadata({ data: "json, name=offsetInMillis" })
  offsetInMillis?: number;
}
