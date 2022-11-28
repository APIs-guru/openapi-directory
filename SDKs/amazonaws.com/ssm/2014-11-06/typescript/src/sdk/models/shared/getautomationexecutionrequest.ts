import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAutomationExecutionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutomationExecutionId" })
  automationExecutionId: string;
}
