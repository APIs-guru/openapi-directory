import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderByOrderTypeEnum {
    OrderTypeUnspecified = "ORDER_TYPE_UNSPECIFIED"
,    Alphanumeric = "ALPHANUMERIC"
,    CaseInsensitiveAlphanumeric = "CASE_INSENSITIVE_ALPHANUMERIC"
,    Numeric = "NUMERIC"
}


// GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderBy
/** 
 * Sorts by dimension values.
**/
export class GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderBy extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimensionName" })
  dimensionName?: string;

  @Metadata({ data: "json, name=orderType" })
  orderType?: GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderByOrderTypeEnum;
}
