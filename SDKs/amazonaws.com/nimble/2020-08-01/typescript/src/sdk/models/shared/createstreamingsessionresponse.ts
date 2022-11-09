import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StreamingSession } from "./streamingsession";


export class CreateStreamingSessionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=session" })
  session?: StreamingSession;
}
