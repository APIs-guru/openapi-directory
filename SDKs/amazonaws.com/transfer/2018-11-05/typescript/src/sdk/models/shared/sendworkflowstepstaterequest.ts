import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomStepStatusEnum } from "./customstepstatusenum";



export class SendWorkflowStepStateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExecutionId" })
  executionId: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status: CustomStepStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Token" })
  token: string;

  @SpeakeasyMetadata({ data: "json, name=WorkflowId" })
  workflowId: string;
}
