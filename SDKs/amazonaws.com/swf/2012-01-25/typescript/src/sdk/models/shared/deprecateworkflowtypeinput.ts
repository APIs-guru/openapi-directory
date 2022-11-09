import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkflowType } from "./workflowtype";


export class DeprecateWorkflowTypeInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=domain" })
  domain: string;

  @Metadata({ data: "json, name=workflowType" })
  workflowType: WorkflowType;
}
