import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DashboardSummary } from "./dashboardsummary";



export class ListDashboardsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dashboardSummaries", elemType: DashboardSummary })
  dashboardSummaries: DashboardSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
