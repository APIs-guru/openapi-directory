import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AutomationExecution
/** 
 * The Systems Manager automation document process to start as the runbook at the beginning of the incident.
**/
export class AutomationExecution extends SpeakeasyBase {
  @Metadata({ data: "json, name=ssmExecutionArn" })
  ssmExecutionArn?: string;
}
