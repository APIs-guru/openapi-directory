import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Sampling statistics from a call to <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html">GetSamplingTargets</a> that X-Ray could not process.
**/
export declare class UnprocessedStatistics extends SpeakeasyBase {
    errorCode?: string;
    message?: string;
    ruleName?: string;
}
