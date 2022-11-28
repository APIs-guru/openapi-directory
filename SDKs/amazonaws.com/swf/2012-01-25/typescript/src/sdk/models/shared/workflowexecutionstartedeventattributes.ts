import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChildPolicyEnum } from "./childpolicyenum";
import { WorkflowExecution } from "./workflowexecution";
import { TaskList } from "./tasklist";
import { WorkflowType } from "./workflowtype";



// WorkflowExecutionStartedEventAttributes
/** 
 * Provides details of <code>WorkflowExecutionStarted</code> event.
**/
export class WorkflowExecutionStartedEventAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=childPolicy" })
  childPolicy: ChildPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=continuedExecutionRunId" })
  continuedExecutionRunId?: string;

  @SpeakeasyMetadata({ data: "json, name=executionStartToCloseTimeout" })
  executionStartToCloseTimeout?: string;

  @SpeakeasyMetadata({ data: "json, name=input" })
  input?: string;

  @SpeakeasyMetadata({ data: "json, name=lambdaRole" })
  lambdaRole?: string;

  @SpeakeasyMetadata({ data: "json, name=parentInitiatedEventId" })
  parentInitiatedEventId?: number;

  @SpeakeasyMetadata({ data: "json, name=parentWorkflowExecution" })
  parentWorkflowExecution?: WorkflowExecution;

  @SpeakeasyMetadata({ data: "json, name=tagList" })
  tagList?: string[];

  @SpeakeasyMetadata({ data: "json, name=taskList" })
  taskList: TaskList;

  @SpeakeasyMetadata({ data: "json, name=taskPriority" })
  taskPriority?: string;

  @SpeakeasyMetadata({ data: "json, name=taskStartToCloseTimeout" })
  taskStartToCloseTimeout?: string;

  @SpeakeasyMetadata({ data: "json, name=workflowType" })
  workflowType: WorkflowType;
}
