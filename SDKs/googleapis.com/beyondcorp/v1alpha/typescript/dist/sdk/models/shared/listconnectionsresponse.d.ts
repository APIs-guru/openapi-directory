import { SpeakeasyBase } from "../../../internal/utils";
import { Connection } from "./connection";
/**
 * Response message for BeyondCorp.ListConnections.
**/
export declare class ListConnectionsResponse extends SpeakeasyBase {
    connections?: Connection[];
    nextPageToken?: string;
    unreachable?: string[];
}
