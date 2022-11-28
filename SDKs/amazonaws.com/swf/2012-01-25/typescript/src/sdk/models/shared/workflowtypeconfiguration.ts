import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChildPolicyEnum } from "./childpolicyenum";
import { TaskList } from "./tasklist";



// WorkflowTypeConfiguration
/** 
 * The configuration settings of a workflow type.
**/
export class WorkflowTypeConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultChildPolicy" })
  defaultChildPolicy?: ChildPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=defaultExecutionStartToCloseTimeout" })
  defaultExecutionStartToCloseTimeout?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultLambdaRole" })
  defaultLambdaRole?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultTaskList" })
  defaultTaskList?: TaskList;

  @SpeakeasyMetadata({ data: "json, name=defaultTaskPriority" })
  defaultTaskPriority?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultTaskStartToCloseTimeout" })
  defaultTaskStartToCloseTimeout?: string;
}
