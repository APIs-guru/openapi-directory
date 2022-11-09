import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BaseKpiResult } from "./basekpiresult";


// CampaignDateRangeKpiResponse
/** 
 * Provides the results of a query that retrieved the data for a standard metric that applies to a campaign, and provides information about that query.
**/
export class CampaignDateRangeKpiResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationId" })
  applicationId: string;

  @Metadata({ data: "json, name=CampaignId" })
  campaignId: string;

  @Metadata({ data: "json, name=EndTime" })
  endTime: Date;

  @Metadata({ data: "json, name=KpiName" })
  kpiName: string;

  @Metadata({ data: "json, name=KpiResult" })
  kpiResult: BaseKpiResult;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=StartTime" })
  startTime: Date;
}
