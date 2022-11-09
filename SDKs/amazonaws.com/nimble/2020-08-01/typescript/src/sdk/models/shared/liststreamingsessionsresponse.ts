import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StreamingSession } from "./streamingsession";


export class ListStreamingSessionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=sessions", elemType: shared.StreamingSession })
  sessions?: StreamingSession[];
}
