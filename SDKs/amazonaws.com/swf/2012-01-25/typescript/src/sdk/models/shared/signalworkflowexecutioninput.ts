import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SignalWorkflowExecutionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=domain" })
  domain: string;

  @Metadata({ data: "json, name=input" })
  input?: string;

  @Metadata({ data: "json, name=runId" })
  runId?: string;

  @Metadata({ data: "json, name=signalName" })
  signalName: string;

  @Metadata({ data: "json, name=workflowId" })
  workflowId: string;
}
