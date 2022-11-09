import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BaseKpiResult } from "./basekpiresult";


// ApplicationDateRangeKpiResponse
/** 
 * Provides the results of a query that retrieved the data for a standard metric that applies to an application, and provides information about that query.
**/
export class ApplicationDateRangeKpiResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationId" })
  applicationId: string;

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
