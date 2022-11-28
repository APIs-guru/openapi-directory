import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionDetails } from "./connectiondetails";
/**
 * Response message for BeyondCorp.ResolveConnections.
**/
export declare class ResolveConnectionsResponse extends SpeakeasyBase {
    connectionDetails?: ConnectionDetails[];
    nextPageToken?: string;
    unreachable?: string[];
}
