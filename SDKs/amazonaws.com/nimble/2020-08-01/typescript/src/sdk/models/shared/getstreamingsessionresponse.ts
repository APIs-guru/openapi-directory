import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StreamingSession } from "./streamingsession";


export class GetStreamingSessionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=session" })
  session?: StreamingSession;
}
