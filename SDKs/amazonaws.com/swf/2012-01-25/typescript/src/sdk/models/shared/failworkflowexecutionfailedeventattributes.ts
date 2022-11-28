import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FailWorkflowExecutionFailedCauseEnum } from "./failworkflowexecutionfailedcauseenum";



// FailWorkflowExecutionFailedEventAttributes
/** 
 * Provides the details of the <code>FailWorkflowExecutionFailed</code> event.
**/
export class FailWorkflowExecutionFailedEventAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cause" })
  cause: FailWorkflowExecutionFailedCauseEnum;

  @SpeakeasyMetadata({ data: "json, name=decisionTaskCompletedEventId" })
  decisionTaskCompletedEventId: number;
}
