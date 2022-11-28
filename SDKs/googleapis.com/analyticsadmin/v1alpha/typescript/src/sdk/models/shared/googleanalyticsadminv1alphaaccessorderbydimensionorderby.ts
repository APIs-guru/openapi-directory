import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderByOrderTypeEnum {
    OrderTypeUnspecified = "ORDER_TYPE_UNSPECIFIED",
    Alphanumeric = "ALPHANUMERIC",
    CaseInsensitiveAlphanumeric = "CASE_INSENSITIVE_ALPHANUMERIC",
    Numeric = "NUMERIC"
}


// GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderBy
/** 
 * Sorts by dimension values.
**/
export class GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderBy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensionName" })
  dimensionName?: string;

  @SpeakeasyMetadata({ data: "json, name=orderType" })
  orderType?: GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderByOrderTypeEnum;
}
