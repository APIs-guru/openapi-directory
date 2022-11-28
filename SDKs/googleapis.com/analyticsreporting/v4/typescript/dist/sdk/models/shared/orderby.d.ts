import { SpeakeasyBase } from "../../../internal/utils";
export declare enum OrderByOrderTypeEnum {
    OrderTypeUnspecified = "ORDER_TYPE_UNSPECIFIED",
    Value = "VALUE",
    Delta = "DELTA",
    Smart = "SMART",
    HistogramBucket = "HISTOGRAM_BUCKET",
    DimensionAsInteger = "DIMENSION_AS_INTEGER"
}
export declare enum OrderBySortOrderEnum {
    SortOrderUnspecified = "SORT_ORDER_UNSPECIFIED",
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
/**
 * Specifies the sorting options.
**/
export declare class OrderBy extends SpeakeasyBase {
    fieldName?: string;
    orderType?: OrderByOrderTypeEnum;
    sortOrder?: OrderBySortOrderEnum;
}
