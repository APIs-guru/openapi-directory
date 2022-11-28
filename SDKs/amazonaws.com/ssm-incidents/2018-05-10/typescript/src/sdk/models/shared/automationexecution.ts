import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AutomationExecution
/** 
 * The Systems Manager automation document process to start as the runbook at the beginning of the incident.
**/
export class AutomationExecution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ssmExecutionArn" })
  ssmExecutionArn?: string;
}
