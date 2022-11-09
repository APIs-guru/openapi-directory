import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AutomationExecution } from "./automationexecution";


export class GetAutomationExecutionResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutomationExecution" })
  automationExecution?: AutomationExecution;
}
