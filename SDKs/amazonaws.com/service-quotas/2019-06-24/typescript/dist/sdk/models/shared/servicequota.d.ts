import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ErrorReason } from "./errorreason";
import { QuotaPeriod } from "./quotaperiod";
import { MetricInfo } from "./metricinfo";
/**
 * Information about a quota.
**/
export declare class ServiceQuota extends SpeakeasyBase {
    adjustable?: boolean;
    errorReason?: ErrorReason;
    globalQuota?: boolean;
    period?: QuotaPeriod;
    quotaArn?: string;
    quotaCode?: string;
    quotaName?: string;
    serviceCode?: string;
    serviceName?: string;
    unit?: string;
    usageMetric?: MetricInfo;
    value?: number;
}
