import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Decision } from "./decision";



// RespondDecisionTaskCompletedInput
/** 
 * Input data for a TaskCompleted response to a decision task.
**/
export class RespondDecisionTaskCompletedInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=decisions", elemType: Decision })
  decisions?: Decision[];

  @SpeakeasyMetadata({ data: "json, name=executionContext" })
  executionContext?: string;

  @SpeakeasyMetadata({ data: "json, name=taskToken" })
  taskToken: string;
}
