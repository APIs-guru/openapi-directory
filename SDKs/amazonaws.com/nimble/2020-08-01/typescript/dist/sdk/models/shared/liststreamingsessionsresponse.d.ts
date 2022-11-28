import { SpeakeasyBase } from "../../../internal/utils";
import { StreamingSession } from "./streamingsession";
export declare class ListStreamingSessionsResponse extends SpeakeasyBase {
    nextToken?: string;
    sessions?: StreamingSession[];
}
