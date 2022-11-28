import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChildPolicyEnum } from "./childpolicyenum";
import { TaskList } from "./tasklist";



// WorkflowExecutionConfiguration
/** 
 * The configuration settings for a workflow execution including timeout values, tasklist etc. These configuration settings are determined from the defaults specified when registering the workflow type and those specified when starting the workflow execution.
**/
export class WorkflowExecutionConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=childPolicy" })
  childPolicy: ChildPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=executionStartToCloseTimeout" })
  executionStartToCloseTimeout: string;

  @SpeakeasyMetadata({ data: "json, name=lambdaRole" })
  lambdaRole?: string;

  @SpeakeasyMetadata({ data: "json, name=taskList" })
  taskList: TaskList;

  @SpeakeasyMetadata({ data: "json, name=taskPriority" })
  taskPriority?: string;

  @SpeakeasyMetadata({ data: "json, name=taskStartToCloseTimeout" })
  taskStartToCloseTimeout: string;
}
