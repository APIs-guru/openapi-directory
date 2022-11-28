import { SpeakeasyBase } from "../../../internal/utils";
import { DashboardEntry } from "./dashboardentry";
export declare class ListDashboardsOutput extends SpeakeasyBase {
    dashboardEntries?: DashboardEntry[];
    nextToken?: string;
}
