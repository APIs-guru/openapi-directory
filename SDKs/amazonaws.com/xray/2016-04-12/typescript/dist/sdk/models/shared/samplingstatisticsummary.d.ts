import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Aggregated request sampling data for a sampling rule across all services for a 10-second window.
**/
export declare class SamplingStatisticSummary extends SpeakeasyBase {
    borrowCount?: number;
    requestCount?: number;
    ruleName?: string;
    sampledCount?: number;
    timestamp?: Date;
}
