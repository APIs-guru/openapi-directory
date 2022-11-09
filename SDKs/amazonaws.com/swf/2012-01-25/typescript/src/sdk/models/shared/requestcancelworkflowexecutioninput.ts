import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RequestCancelWorkflowExecutionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=domain" })
  domain: string;

  @Metadata({ data: "json, name=runId" })
  runId?: string;

  @Metadata({ data: "json, name=workflowId" })
  workflowId: string;
}
