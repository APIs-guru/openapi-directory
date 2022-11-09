import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomStepStatusEnum } from "./customstepstatusenum";


export class SendWorkflowStepStateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExecutionId" })
  executionId: string;

  @Metadata({ data: "json, name=Status" })
  status: CustomStepStatusEnum;

  @Metadata({ data: "json, name=Token" })
  token: string;

  @Metadata({ data: "json, name=WorkflowId" })
  workflowId: string;
}
