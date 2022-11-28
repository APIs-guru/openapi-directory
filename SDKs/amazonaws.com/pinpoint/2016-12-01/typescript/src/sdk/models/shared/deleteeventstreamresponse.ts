import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventStream } from "./eventstream";



export class DeleteEventStreamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EventStream" })
  eventStream: EventStream;
}
