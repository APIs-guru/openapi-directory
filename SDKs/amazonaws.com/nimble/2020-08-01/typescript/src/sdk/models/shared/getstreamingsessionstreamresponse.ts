import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StreamingSessionStream } from "./streamingsessionstream";


export class GetStreamingSessionStreamResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=stream" })
  stream?: StreamingSessionStream;
}
