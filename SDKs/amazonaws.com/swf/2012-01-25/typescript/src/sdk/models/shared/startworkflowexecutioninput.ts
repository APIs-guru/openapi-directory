import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChildPolicyEnum } from "./childpolicyenum";
import { TaskList } from "./tasklist";
import { WorkflowType } from "./workflowtype";



export class StartWorkflowExecutionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=childPolicy" })
  childPolicy?: ChildPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain: string;

  @SpeakeasyMetadata({ data: "json, name=executionStartToCloseTimeout" })
  executionStartToCloseTimeout?: string;

  @SpeakeasyMetadata({ data: "json, name=input" })
  input?: string;

  @SpeakeasyMetadata({ data: "json, name=lambdaRole" })
  lambdaRole?: string;

  @SpeakeasyMetadata({ data: "json, name=tagList" })
  tagList?: string[];

  @SpeakeasyMetadata({ data: "json, name=taskList" })
  taskList?: TaskList;

  @SpeakeasyMetadata({ data: "json, name=taskPriority" })
  taskPriority?: string;

  @SpeakeasyMetadata({ data: "json, name=taskStartToCloseTimeout" })
  taskStartToCloseTimeout?: string;

  @SpeakeasyMetadata({ data: "json, name=workflowId" })
  workflowId: string;

  @SpeakeasyMetadata({ data: "json, name=workflowType" })
  workflowType: WorkflowType;
}
