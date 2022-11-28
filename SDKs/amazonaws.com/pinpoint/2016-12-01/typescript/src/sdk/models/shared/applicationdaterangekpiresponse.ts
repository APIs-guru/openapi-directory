import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BaseKpiResult } from "./basekpiresult";



// ApplicationDateRangeKpiResponse
/** 
 * Provides the results of a query that retrieved the data for a standard metric that applies to an application, and provides information about that query.
**/
export class ApplicationDateRangeKpiResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationId" })
  applicationId: string;

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
