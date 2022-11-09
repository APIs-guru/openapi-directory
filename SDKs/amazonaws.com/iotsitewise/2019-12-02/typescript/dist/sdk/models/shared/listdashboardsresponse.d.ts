import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DashboardSummary } from "./dashboardsummary";
export declare class ListDashboardsResponse extends SpeakeasyBase {
    dashboardSummaries: DashboardSummary[];
    nextToken?: string;
}
