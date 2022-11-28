import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Condition } from "./condition";



// Filter
/** 
 * Filter the selection by using a condition.
**/
export class Filter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition: Condition;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;
}
