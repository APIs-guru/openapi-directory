import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StreamingSession } from "./streamingsession";



export class CreateStreamingSessionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=session" })
  session?: StreamingSession;
}
