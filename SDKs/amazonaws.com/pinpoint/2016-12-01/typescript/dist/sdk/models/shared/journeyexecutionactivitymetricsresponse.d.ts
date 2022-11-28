import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey activity, and provides information about that query.
**/
export declare class JourneyExecutionActivityMetricsResponse extends SpeakeasyBase {
    activityType: string;
    applicationId: string;
    journeyActivityId: string;
    journeyId: string;
    lastEvaluatedTime: string;
    metrics: Map<string, string>;
}
