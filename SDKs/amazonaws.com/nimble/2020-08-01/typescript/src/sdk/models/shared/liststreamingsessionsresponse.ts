import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StreamingSession } from "./streamingsession";



export class ListStreamingSessionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=sessions", elemType: StreamingSession })
  sessions?: StreamingSession[];
}
