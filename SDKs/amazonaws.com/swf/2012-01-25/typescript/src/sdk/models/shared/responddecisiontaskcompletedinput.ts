import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Decision } from "./decision";


// RespondDecisionTaskCompletedInput
/** 
 * Input data for a TaskCompleted response to a decision task.
**/
export class RespondDecisionTaskCompletedInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=decisions", elemType: shared.Decision })
  decisions?: Decision[];

  @Metadata({ data: "json, name=executionContext" })
  executionContext?: string;

  @Metadata({ data: "json, name=taskToken" })
  taskToken: string;
}
