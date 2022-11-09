import { SpeakeasyBase } from "../../../internal/utils/utils";
import { FleetSummary } from "./fleetsummary";
export declare class ListFleetsResponse extends SpeakeasyBase {
    fleetSummaryList?: FleetSummary[];
    nextToken?: string;
}
