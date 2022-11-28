import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue } from "./googleanalyticsadminv1alphaaudiencedimensionormetricfilternumericvalue";
export declare enum GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilterOperationEnum {
    OperationUnspecified = "OPERATION_UNSPECIFIED",
    Equal = "EQUAL",
    LessThan = "LESS_THAN",
    GreaterThan = "GREATER_THAN"
}
/**
 * A filter for numeric or date values on a dimension or metric.
**/
export declare class GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter extends SpeakeasyBase {
    operation?: GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilterOperationEnum;
    value?: GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue;
}
