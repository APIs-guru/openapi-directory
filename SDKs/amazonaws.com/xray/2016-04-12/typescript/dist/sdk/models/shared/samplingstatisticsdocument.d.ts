import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request sampling results for a single rule from a service. Results are for the last 10 seconds unless the service has been assigned a longer reporting interval after a previous call to <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html">GetSamplingTargets</a>.
**/
export declare class SamplingStatisticsDocument extends SpeakeasyBase {
    borrowCount?: number;
    clientId: string;
    requestCount: number;
    ruleName: string;
    sampledCount: number;
    timestamp: Date;
}
