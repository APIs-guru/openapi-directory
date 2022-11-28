import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ScheduledWindowExecution
/** 
 * Information about a scheduled execution for a maintenance window.
**/
export class ScheduledWindowExecution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExecutionTime" })
  executionTime?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=WindowId" })
  windowId?: string;
}
