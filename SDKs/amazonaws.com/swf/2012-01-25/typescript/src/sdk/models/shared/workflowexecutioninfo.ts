import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CloseStatusEnum } from "./closestatusenum";
import { WorkflowExecution } from "./workflowexecution";
import { ExecutionStatusEnum } from "./executionstatusenum";
import { WorkflowExecution } from "./workflowexecution";
import { WorkflowType } from "./workflowtype";


// WorkflowExecutionInfo
/** 
 * Contains information about a workflow execution.
**/
export class WorkflowExecutionInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=cancelRequested" })
  cancelRequested?: boolean;

  @Metadata({ data: "json, name=closeStatus" })
  closeStatus?: CloseStatusEnum;

  @Metadata({ data: "json, name=closeTimestamp" })
  closeTimestamp?: Date;

  @Metadata({ data: "json, name=execution" })
  execution: WorkflowExecution;

  @Metadata({ data: "json, name=executionStatus" })
  executionStatus: ExecutionStatusEnum;

  @Metadata({ data: "json, name=parent" })
  parent?: WorkflowExecution;

  @Metadata({ data: "json, name=startTimestamp" })
  startTimestamp: Date;

  @Metadata({ data: "json, name=tagList" })
  tagList?: string[];

  @Metadata({ data: "json, name=workflowType" })
  workflowType: WorkflowType;
}
