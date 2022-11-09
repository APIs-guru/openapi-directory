import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAnalyticsAdminV1alphaNumericValue } from "./googleanalyticsadminv1alphanumericvalue";

export enum GoogleAnalyticsAdminV1alphaAccessNumericFilterOperationEnum {
    OperationUnspecified = "OPERATION_UNSPECIFIED"
,    Equal = "EQUAL"
,    LessThan = "LESS_THAN"
,    LessThanOrEqual = "LESS_THAN_OR_EQUAL"
,    GreaterThan = "GREATER_THAN"
,    GreaterThanOrEqual = "GREATER_THAN_OR_EQUAL"
}


// GoogleAnalyticsAdminV1alphaAccessNumericFilter
/** 
 * Filters for numeric or date values.
**/
export class GoogleAnalyticsAdminV1alphaAccessNumericFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=operation" })
  operation?: GoogleAnalyticsAdminV1alphaAccessNumericFilterOperationEnum;

  @Metadata({ data: "json, name=value" })
  value?: GoogleAnalyticsAdminV1alphaNumericValue;
}
