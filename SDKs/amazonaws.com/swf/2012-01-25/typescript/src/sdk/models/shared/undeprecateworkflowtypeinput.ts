import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkflowType } from "./workflowtype";



export class UndeprecateWorkflowTypeInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain: string;

  @SpeakeasyMetadata({ data: "json, name=workflowType" })
  workflowType: WorkflowType;
}
