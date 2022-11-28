import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Temporary changes to a sampling rule configuration. To meet the global sampling target for a rule, X-Ray calculates a new reservoir for each service based on the recent sampling results of all services that called <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html">GetSamplingTargets</a>.
**/
export declare class SamplingTargetDocument extends SpeakeasyBase {
    fixedRate?: number;
    interval?: number;
    reservoirQuota?: number;
    reservoirQuotaTtl?: Date;
    ruleName?: string;
}
