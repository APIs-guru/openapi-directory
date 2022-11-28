import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderByOrderTypeEnum {
    OrderTypeUnspecified = "ORDER_TYPE_UNSPECIFIED",
    Alphanumeric = "ALPHANUMERIC",
    CaseInsensitiveAlphanumeric = "CASE_INSENSITIVE_ALPHANUMERIC",
    Numeric = "NUMERIC"
}
/**
 * Sorts by dimension values.
**/
export declare class GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderBy extends SpeakeasyBase {
    dimensionName?: string;
    orderType?: GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderByOrderTypeEnum;
}
