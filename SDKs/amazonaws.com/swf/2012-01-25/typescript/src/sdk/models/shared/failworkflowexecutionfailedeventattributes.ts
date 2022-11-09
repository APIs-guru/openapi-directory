import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FailWorkflowExecutionFailedCauseEnum } from "./failworkflowexecutionfailedcauseenum";


// FailWorkflowExecutionFailedEventAttributes
/** 
 * Provides the details of the <code>FailWorkflowExecutionFailed</code> event.
**/
export class FailWorkflowExecutionFailedEventAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=cause" })
  cause: FailWorkflowExecutionFailedCauseEnum;

  @Metadata({ data: "json, name=decisionTaskCompletedEventId" })
  decisionTaskCompletedEventId: number;
}
