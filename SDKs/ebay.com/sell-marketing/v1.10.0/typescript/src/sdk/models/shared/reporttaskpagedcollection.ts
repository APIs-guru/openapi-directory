import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportTask } from "./reporttask";



// ReportTaskPagedCollection
/** 
 * This type defines the fields that paginate the reports tasks returned by the request. The entire result set consists of 0 or more sequenced response pages, where each page consists of 0 or more items from the complete result set.
**/
export class ReportTaskPagedCollection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev?: string;

  @SpeakeasyMetadata({ data: "json, name=reportTasks", elemType: ReportTask })
  reportTasks?: ReportTask[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}
