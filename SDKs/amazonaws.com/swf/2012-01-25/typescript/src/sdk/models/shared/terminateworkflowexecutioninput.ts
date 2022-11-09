import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ChildPolicyEnum } from "./childpolicyenum";


export class TerminateWorkflowExecutionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=childPolicy" })
  childPolicy?: ChildPolicyEnum;

  @Metadata({ data: "json, name=details" })
  details?: string;

  @Metadata({ data: "json, name=domain" })
  domain: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=runId" })
  runId?: string;

  @Metadata({ data: "json, name=workflowId" })
  workflowId: string;
}
