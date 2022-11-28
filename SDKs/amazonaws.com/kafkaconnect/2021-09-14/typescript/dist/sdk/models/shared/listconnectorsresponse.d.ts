import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectorSummary } from "./connectorsummary";
export declare class ListConnectorsResponse extends SpeakeasyBase {
    connectors?: ConnectorSummary[];
    nextToken?: string;
}
