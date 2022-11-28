import { SpeakeasyBase } from "../../../internal/utils";
import { Connector } from "./connector";
/**
 * Response message for BeyondCorp.ListConnectors.
**/
export declare class ListConnectorsResponse extends SpeakeasyBase {
    connectors?: Connector[];
    nextPageToken?: string;
    unreachable?: string[];
}
