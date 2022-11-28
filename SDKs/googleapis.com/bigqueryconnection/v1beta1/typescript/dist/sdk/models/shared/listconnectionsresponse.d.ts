import { SpeakeasyBase } from "../../../internal/utils";
import { Connection } from "./connection";
/**
 * The response for ConnectionService.ListConnections.
**/
export declare class ListConnectionsResponse extends SpeakeasyBase {
    connections?: Connection[];
    nextPageToken?: string;
}
