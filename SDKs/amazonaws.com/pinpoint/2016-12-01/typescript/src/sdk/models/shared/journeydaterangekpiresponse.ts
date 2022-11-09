import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BaseKpiResult } from "./basekpiresult";


// JourneyDateRangeKpiResponse
/** 
 * Provides the results of a query that retrieved the data for a standard engagement metric that applies to a journey, and provides information about that query.
**/
export class JourneyDateRangeKpiResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationId" })
  applicationId: string;

  @Metadata({ data: "json, name=EndTime" })
  endTime: Date;

  @Metadata({ data: "json, name=JourneyId" })
  journeyId: string;

  @Metadata({ data: "json, name=KpiName" })
  kpiName: string;

  @Metadata({ data: "json, name=KpiResult" })
  kpiResult: BaseKpiResult;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=StartTime" })
  startTime: Date;
}
