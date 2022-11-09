import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum OrderByOrderTypeEnum {
    OrderTypeUnspecified = "ORDER_TYPE_UNSPECIFIED"
,    Value = "VALUE"
,    Delta = "DELTA"
,    Smart = "SMART"
,    HistogramBucket = "HISTOGRAM_BUCKET"
,    DimensionAsInteger = "DIMENSION_AS_INTEGER"
}

export enum OrderBySortOrderEnum {
    SortOrderUnspecified = "SORT_ORDER_UNSPECIFIED"
,    Ascending = "ASCENDING"
,    Descending = "DESCENDING"
}


// OrderBy
/** 
 * Specifies the sorting options.
**/
export class OrderBy extends SpeakeasyBase {
  @Metadata({ data: "json, name=fieldName" })
  fieldName?: string;

  @Metadata({ data: "json, name=orderType" })
  orderType?: OrderByOrderTypeEnum;

  @Metadata({ data: "json, name=sortOrder" })
  sortOrder?: OrderBySortOrderEnum;
}
