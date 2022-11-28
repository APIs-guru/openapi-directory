import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChildPolicyEnum } from "./childpolicyenum";



export class TerminateWorkflowExecutionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=childPolicy" })
  childPolicy?: ChildPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: string;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=runId" })
  runId?: string;

  @SpeakeasyMetadata({ data: "json, name=workflowId" })
  workflowId: string;
}
