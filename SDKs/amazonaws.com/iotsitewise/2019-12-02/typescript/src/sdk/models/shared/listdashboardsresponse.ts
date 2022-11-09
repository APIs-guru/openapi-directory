import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DashboardSummary } from "./dashboardsummary";


export class ListDashboardsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=dashboardSummaries", elemType: shared.DashboardSummary })
  dashboardSummaries: DashboardSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
