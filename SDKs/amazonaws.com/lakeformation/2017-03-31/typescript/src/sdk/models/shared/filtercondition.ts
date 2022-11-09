import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ComparisonOperatorEnum } from "./comparisonoperatorenum";
import { FieldNameStringEnum } from "./fieldnamestringenum";


// FilterCondition
/** 
 * This structure describes the filtering of columns in a table based on a filter condition.
**/
export class FilterCondition extends SpeakeasyBase {
  @Metadata({ data: "json, name=ComparisonOperator" })
  comparisonOperator?: ComparisonOperatorEnum;

  @Metadata({ data: "json, name=Field" })
  field?: FieldNameStringEnum;

  @Metadata({ data: "json, name=StringValueList" })
  stringValueList?: string[];
}
