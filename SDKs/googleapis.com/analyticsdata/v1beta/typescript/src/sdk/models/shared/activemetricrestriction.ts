import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ActiveMetricRestrictionRestrictedMetricTypesEnum {
    RestrictedMetricTypeUnspecified = "RESTRICTED_METRIC_TYPE_UNSPECIFIED"
,    CostData = "COST_DATA"
,    RevenueData = "REVENUE_DATA"
}


// ActiveMetricRestriction
/** 
 * A metric actively restricted in creating the report.
**/
export class ActiveMetricRestriction extends SpeakeasyBase {
  @Metadata({ data: "json, name=metricName" })
  metricName?: string;

  @Metadata({ data: "json, name=restrictedMetricTypes" })
  restrictedMetricTypes?: ActiveMetricRestrictionRestrictedMetricTypesEnum[];
}
