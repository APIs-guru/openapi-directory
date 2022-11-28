import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComparisonOperatorEnum } from "./comparisonoperatorenum";
import { FieldNameStringEnum } from "./fieldnamestringenum";



// FilterCondition
/** 
 * This structure describes the filtering of columns in a table based on a filter condition.
**/
export class FilterCondition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComparisonOperator" })
  comparisonOperator?: ComparisonOperatorEnum;

  @SpeakeasyMetadata({ data: "json, name=Field" })
  field?: FieldNameStringEnum;

  @SpeakeasyMetadata({ data: "json, name=StringValueList" })
  stringValueList?: string[];
}
