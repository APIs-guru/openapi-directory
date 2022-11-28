import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ActiveMetricRestrictionRestrictedMetricTypesEnum {
    RestrictedMetricTypeUnspecified = "RESTRICTED_METRIC_TYPE_UNSPECIFIED",
    CostData = "COST_DATA",
    RevenueData = "REVENUE_DATA"
}
/**
 * A metric actively restricted in creating the report.
**/
export declare class ActiveMetricRestriction extends SpeakeasyBase {
    metricName?: string;
    restrictedMetricTypes?: ActiveMetricRestrictionRestrictedMetricTypesEnum[];
}
