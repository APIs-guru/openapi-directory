import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue } from "./googleanalyticsadminv1alphaaudiencedimensionormetricfilternumericvalue";


export enum GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilterOperationEnum {
    OperationUnspecified = "OPERATION_UNSPECIFIED",
    Equal = "EQUAL",
    LessThan = "LESS_THAN",
    GreaterThan = "GREATER_THAN"
}


// GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter
/** 
 * A filter for numeric or date values on a dimension or metric.
**/
export class GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=operation" })
  operation?: GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilterOperationEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue;
}
