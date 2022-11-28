import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SignalWorkflowExecutionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain: string;

  @SpeakeasyMetadata({ data: "json, name=input" })
  input?: string;

  @SpeakeasyMetadata({ data: "json, name=runId" })
  runId?: string;

  @SpeakeasyMetadata({ data: "json, name=signalName" })
  signalName: string;

  @SpeakeasyMetadata({ data: "json, name=workflowId" })
  workflowId: string;
}
