import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReportTask } from "./reporttask";


// ReportTaskPagedCollection
/** 
 * This type defines the fields that paginate the reports tasks returned by the request. The entire result set consists of 0 or more sequenced response pages, where each page consists of 0 or more items from the complete result set.
**/
export class ReportTaskPagedCollection extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=offset" })
  offset?: number;

  @Metadata({ data: "json, name=prev" })
  prev?: string;

  @Metadata({ data: "json, name=reportTasks", elemType: shared.ReportTask })
  reportTasks?: ReportTask[];

  @Metadata({ data: "json, name=total" })
  total?: number;
}
