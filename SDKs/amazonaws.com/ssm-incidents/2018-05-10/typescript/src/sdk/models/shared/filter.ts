import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Condition } from "./condition";


// Filter
/** 
 * Filter the selection by using a condition.
**/
export class Filter extends SpeakeasyBase {
  @Metadata({ data: "json, name=condition" })
  condition: Condition;

  @Metadata({ data: "json, name=key" })
  key: string;
}
