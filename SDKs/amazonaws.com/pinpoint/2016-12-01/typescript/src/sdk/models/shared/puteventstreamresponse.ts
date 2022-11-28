import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventStream } from "./eventstream";



export class PutEventStreamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EventStream" })
  eventStream: EventStream;
}
