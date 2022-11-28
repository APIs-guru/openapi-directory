import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ActionCondition
/** 
 * Conditions for actions to deal with task failures.
**/
export class ActionCondition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exitCodes" })
  exitCodes?: number[];
}
