import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EventStream } from "./eventstream";


export class PutEventStreamResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=EventStream" })
  eventStream: EventStream;
}
