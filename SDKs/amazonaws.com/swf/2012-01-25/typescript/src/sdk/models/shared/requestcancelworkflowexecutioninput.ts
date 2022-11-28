import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RequestCancelWorkflowExecutionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain: string;

  @SpeakeasyMetadata({ data: "json, name=runId" })
  runId?: string;

  @SpeakeasyMetadata({ data: "json, name=workflowId" })
  workflowId: string;
}
