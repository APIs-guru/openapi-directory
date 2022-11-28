import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey, and provides information about that query.
**/
export declare class JourneyExecutionMetricsResponse extends SpeakeasyBase {
    applicationId: string;
    journeyId: string;
    lastEvaluatedTime: string;
    metrics: Map<string, string>;
}
