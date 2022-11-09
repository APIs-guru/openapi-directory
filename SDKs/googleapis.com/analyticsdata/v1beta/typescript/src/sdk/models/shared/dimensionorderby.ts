import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DimensionOrderByOrderTypeEnum {
    OrderTypeUnspecified = "ORDER_TYPE_UNSPECIFIED"
,    Alphanumeric = "ALPHANUMERIC"
,    CaseInsensitiveAlphanumeric = "CASE_INSENSITIVE_ALPHANUMERIC"
,    Numeric = "NUMERIC"
}


// DimensionOrderBy
/** 
 * Sorts by dimension values.
**/
export class DimensionOrderBy extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimensionName" })
  dimensionName?: string;

  @Metadata({ data: "json, name=orderType" })
  orderType?: DimensionOrderByOrderTypeEnum;
}
