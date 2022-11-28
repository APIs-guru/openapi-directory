import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutomationExecution } from "./automationexecution";



export class GetAutomationExecutionResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutomationExecution" })
  automationExecution?: AutomationExecution;
}
