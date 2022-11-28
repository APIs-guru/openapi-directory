import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HistoryEvent } from "./historyevent";



// History
/** 
 * Paginated representation of a workflow history for a workflow execution. This is the up to date, complete and authoritative record of the events related to all tasks and events in the life of the workflow execution.
**/
export class History extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=events", elemType: HistoryEvent })
  events: HistoryEvent[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
