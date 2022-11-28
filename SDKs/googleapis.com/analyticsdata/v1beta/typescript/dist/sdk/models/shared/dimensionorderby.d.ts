import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DimensionOrderByOrderTypeEnum {
    OrderTypeUnspecified = "ORDER_TYPE_UNSPECIFIED",
    Alphanumeric = "ALPHANUMERIC",
    CaseInsensitiveAlphanumeric = "CASE_INSENSITIVE_ALPHANUMERIC",
    Numeric = "NUMERIC"
}
/**
 * Sorts by dimension values.
**/
export declare class DimensionOrderBy extends SpeakeasyBase {
    dimensionName?: string;
    orderType?: DimensionOrderByOrderTypeEnum;
}
