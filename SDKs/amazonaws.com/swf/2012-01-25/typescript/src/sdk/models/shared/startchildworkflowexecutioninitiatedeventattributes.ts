import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ChildPolicyEnum } from "./childpolicyenum";
import { TaskList } from "./tasklist";
import { WorkflowType } from "./workflowtype";


// StartChildWorkflowExecutionInitiatedEventAttributes
/** 
 * Provides the details of the <code>StartChildWorkflowExecutionInitiated</code> event.
**/
export class StartChildWorkflowExecutionInitiatedEventAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=childPolicy" })
  childPolicy: ChildPolicyEnum;

  @Metadata({ data: "json, name=control" })
  control?: string;

  @Metadata({ data: "json, name=decisionTaskCompletedEventId" })
  decisionTaskCompletedEventId: number;

  @Metadata({ data: "json, name=executionStartToCloseTimeout" })
  executionStartToCloseTimeout?: string;

  @Metadata({ data: "json, name=input" })
  input?: string;

  @Metadata({ data: "json, name=lambdaRole" })
  lambdaRole?: string;

  @Metadata({ data: "json, name=tagList" })
  tagList?: string[];

  @Metadata({ data: "json, name=taskList" })
  taskList: TaskList;

  @Metadata({ data: "json, name=taskPriority" })
  taskPriority?: string;

  @Metadata({ data: "json, name=taskStartToCloseTimeout" })
  taskStartToCloseTimeout?: string;

  @Metadata({ data: "json, name=workflowId" })
  workflowId: string;

  @Metadata({ data: "json, name=workflowType" })
  workflowType: WorkflowType;
}
