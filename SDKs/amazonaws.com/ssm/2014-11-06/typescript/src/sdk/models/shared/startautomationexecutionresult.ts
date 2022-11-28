import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartAutomationExecutionResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutomationExecutionId" })
  automationExecutionId?: string;
}
