import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DimensionOrderByOrderTypeEnum {
    OrderTypeUnspecified = "ORDER_TYPE_UNSPECIFIED",
    Alphanumeric = "ALPHANUMERIC",
    CaseInsensitiveAlphanumeric = "CASE_INSENSITIVE_ALPHANUMERIC",
    Numeric = "NUMERIC"
}


// DimensionOrderBy
/** 
 * Sorts by dimension values.
**/
export class DimensionOrderBy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensionName" })
  dimensionName?: string;

  @SpeakeasyMetadata({ data: "json, name=orderType" })
  orderType?: DimensionOrderByOrderTypeEnum;
}
