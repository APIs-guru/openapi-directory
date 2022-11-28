import { SpeakeasyBase } from "../../../internal/utils";
import { FleetSummary } from "./fleetsummary";
export declare class ListFleetsResponse extends SpeakeasyBase {
    fleetSummaryList?: FleetSummary[];
    nextToken?: string;
}
