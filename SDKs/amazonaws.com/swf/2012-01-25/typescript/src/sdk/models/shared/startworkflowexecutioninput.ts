import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ChildPolicyEnum } from "./childpolicyenum";
import { TaskList } from "./tasklist";
import { WorkflowType } from "./workflowtype";


export class StartWorkflowExecutionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=childPolicy" })
  childPolicy?: ChildPolicyEnum;

  @Metadata({ data: "json, name=domain" })
  domain: string;

  @Metadata({ data: "json, name=executionStartToCloseTimeout" })
  executionStartToCloseTimeout?: string;

  @Metadata({ data: "json, name=input" })
  input?: string;

  @Metadata({ data: "json, name=lambdaRole" })
  lambdaRole?: string;

  @Metadata({ data: "json, name=tagList" })
  tagList?: string[];

  @Metadata({ data: "json, name=taskList" })
  taskList?: TaskList;

  @Metadata({ data: "json, name=taskPriority" })
  taskPriority?: string;

  @Metadata({ data: "json, name=taskStartToCloseTimeout" })
  taskStartToCloseTimeout?: string;

  @Metadata({ data: "json, name=workflowId" })
  workflowId: string;

  @Metadata({ data: "json, name=workflowType" })
  workflowType: WorkflowType;
}
