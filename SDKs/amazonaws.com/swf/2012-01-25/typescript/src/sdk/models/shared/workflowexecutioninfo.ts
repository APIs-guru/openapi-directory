import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloseStatusEnum } from "./closestatusenum";
import { WorkflowExecution } from "./workflowexecution";
import { ExecutionStatusEnum } from "./executionstatusenum";
import { WorkflowType } from "./workflowtype";



// WorkflowExecutionInfo
/** 
 * Contains information about a workflow execution.
**/
export class WorkflowExecutionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cancelRequested" })
  cancelRequested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=closeStatus" })
  closeStatus?: CloseStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=closeTimestamp" })
  closeTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=execution" })
  execution: WorkflowExecution;

  @SpeakeasyMetadata({ data: "json, name=executionStatus" })
  executionStatus: ExecutionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: WorkflowExecution;

  @SpeakeasyMetadata({ data: "json, name=startTimestamp" })
  startTimestamp: Date;

  @SpeakeasyMetadata({ data: "json, name=tagList" })
  tagList?: string[];

  @SpeakeasyMetadata({ data: "json, name=workflowType" })
  workflowType: WorkflowType;
}
