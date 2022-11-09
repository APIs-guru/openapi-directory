import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ScheduledWindowExecution
/** 
 * Information about a scheduled execution for a maintenance window.
**/
export class ScheduledWindowExecution extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExecutionTime" })
  executionTime?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=WindowId" })
  windowId?: string;
}
