import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StreamingSessionStream } from "./streamingsessionstream";



export class CreateStreamingSessionStreamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=stream" })
  stream?: StreamingSessionStream;
}
