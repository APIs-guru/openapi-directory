import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ChildPolicyEnum } from "./childpolicyenum";
import { WorkflowExecution } from "./workflowexecution";
import { TaskList } from "./tasklist";
import { WorkflowType } from "./workflowtype";


// WorkflowExecutionStartedEventAttributes
/** 
 * Provides details of <code>WorkflowExecutionStarted</code> event.
**/
export class WorkflowExecutionStartedEventAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=childPolicy" })
  childPolicy: ChildPolicyEnum;

  @Metadata({ data: "json, name=continuedExecutionRunId" })
  continuedExecutionRunId?: string;

  @Metadata({ data: "json, name=executionStartToCloseTimeout" })
  executionStartToCloseTimeout?: string;

  @Metadata({ data: "json, name=input" })
  input?: string;

  @Metadata({ data: "json, name=lambdaRole" })
  lambdaRole?: string;

  @Metadata({ data: "json, name=parentInitiatedEventId" })
  parentInitiatedEventId?: number;

  @Metadata({ data: "json, name=parentWorkflowExecution" })
  parentWorkflowExecution?: WorkflowExecution;

  @Metadata({ data: "json, name=tagList" })
  tagList?: string[];

  @Metadata({ data: "json, name=taskList" })
  taskList: TaskList;

  @Metadata({ data: "json, name=taskPriority" })
  taskPriority?: string;

  @Metadata({ data: "json, name=taskStartToCloseTimeout" })
  taskStartToCloseTimeout?: string;

  @Metadata({ data: "json, name=workflowType" })
  workflowType: WorkflowType;
}
