import { SpeakeasyBase } from "../../../internal/utils";
import { BaseKpiResult } from "./basekpiresult";
/**
 * Provides the results of a query that retrieved the data for a standard engagement metric that applies to a journey, and provides information about that query.
**/
export declare class JourneyDateRangeKpiResponse extends SpeakeasyBase {
    applicationId: string;
    endTime: Date;
    journeyId: string;
    kpiName: string;
    kpiResult: BaseKpiResult;
    nextToken?: string;
    startTime: Date;
}
