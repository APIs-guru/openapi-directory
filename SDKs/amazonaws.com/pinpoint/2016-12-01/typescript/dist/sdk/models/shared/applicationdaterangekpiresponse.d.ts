import { SpeakeasyBase } from "../../../internal/utils";
import { BaseKpiResult } from "./basekpiresult";
/**
 * Provides the results of a query that retrieved the data for a standard metric that applies to an application, and provides information about that query.
**/
export declare class ApplicationDateRangeKpiResponse extends SpeakeasyBase {
    applicationId: string;
    endTime: Date;
    kpiName: string;
    kpiResult: BaseKpiResult;
    nextToken?: string;
    startTime: Date;
}
