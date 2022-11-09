import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ChildPolicyEnum } from "./childpolicyenum";
import { TaskList } from "./tasklist";


// WorkflowExecutionConfiguration
/** 
 * The configuration settings for a workflow execution including timeout values, tasklist etc. These configuration settings are determined from the defaults specified when registering the workflow type and those specified when starting the workflow execution.
**/
export class WorkflowExecutionConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=childPolicy" })
  childPolicy: ChildPolicyEnum;

  @Metadata({ data: "json, name=executionStartToCloseTimeout" })
  executionStartToCloseTimeout: string;

  @Metadata({ data: "json, name=lambdaRole" })
  lambdaRole?: string;

  @Metadata({ data: "json, name=taskList" })
  taskList: TaskList;

  @Metadata({ data: "json, name=taskPriority" })
  taskPriority?: string;

  @Metadata({ data: "json, name=taskStartToCloseTimeout" })
  taskStartToCloseTimeout: string;
}
