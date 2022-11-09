import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NumericValue } from "./numericvalue";

export enum NumericFilterOperationEnum {
    OperationUnspecified = "OPERATION_UNSPECIFIED"
,    Equal = "EQUAL"
,    LessThan = "LESS_THAN"
,    LessThanOrEqual = "LESS_THAN_OR_EQUAL"
,    GreaterThan = "GREATER_THAN"
,    GreaterThanOrEqual = "GREATER_THAN_OR_EQUAL"
}


// NumericFilter
/** 
 * Filters for numeric or date values.
**/
export class NumericFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=operation" })
  operation?: NumericFilterOperationEnum;

  @Metadata({ data: "json, name=value" })
  value?: NumericValue;
}
