import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ActiveMetricRestrictionRestrictedMetricTypesEnum {
    RestrictedMetricTypeUnspecified = "RESTRICTED_METRIC_TYPE_UNSPECIFIED",
    CostData = "COST_DATA",
    RevenueData = "REVENUE_DATA"
}


// ActiveMetricRestriction
/** 
 * A metric actively restricted in creating the report.
**/
export class ActiveMetricRestriction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metricName" })
  metricName?: string;

  @SpeakeasyMetadata({ data: "json, name=restrictedMetricTypes" })
  restrictedMetricTypes?: ActiveMetricRestrictionRestrictedMetricTypesEnum[];
}
