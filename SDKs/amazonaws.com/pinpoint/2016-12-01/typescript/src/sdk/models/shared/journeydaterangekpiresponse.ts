import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BaseKpiResult } from "./basekpiresult";



// JourneyDateRangeKpiResponse
/** 
 * Provides the results of a query that retrieved the data for a standard engagement metric that applies to a journey, and provides information about that query.
**/
export class JourneyDateRangeKpiResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationId" })
  applicationId: string;

  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime: Date;

  @SpeakeasyMetadata({ data: "json, name=JourneyId" })
  journeyId: string;

  @SpeakeasyMetadata({ data: "json, name=KpiName" })
  kpiName: string;

  @SpeakeasyMetadata({ data: "json, name=KpiResult" })
  kpiResult: BaseKpiResult;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime: Date;
}
