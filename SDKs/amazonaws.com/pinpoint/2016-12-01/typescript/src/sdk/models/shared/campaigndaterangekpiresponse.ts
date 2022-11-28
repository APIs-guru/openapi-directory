import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BaseKpiResult } from "./basekpiresult";



// CampaignDateRangeKpiResponse
/** 
 * Provides the results of a query that retrieved the data for a standard metric that applies to a campaign, and provides information about that query.
**/
export class CampaignDateRangeKpiResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationId" })
  applicationId: string;

  @SpeakeasyMetadata({ data: "json, name=CampaignId" })
  campaignId: string;

  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime: Date;

  @SpeakeasyMetadata({ data: "json, name=KpiName" })
  kpiName: string;

  @SpeakeasyMetadata({ data: "json, name=KpiResult" })
  kpiResult: BaseKpiResult;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime: Date;
}
