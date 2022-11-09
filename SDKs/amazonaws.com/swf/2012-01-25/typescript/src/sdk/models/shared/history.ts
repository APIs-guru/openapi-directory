import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HistoryEvent } from "./historyevent";


// History
/** 
 * Paginated representation of a workflow history for a workflow execution. This is the up to date, complete and authoritative record of the events related to all tasks and events in the life of the workflow execution.
**/
export class History extends SpeakeasyBase {
  @Metadata({ data: "json, name=events", elemType: shared.HistoryEvent })
  events: HistoryEvent[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
