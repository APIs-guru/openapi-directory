import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExportTask } from "./exporttask";



export class DescribeExportTasksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exportTasks", elemType: ExportTask })
  exportTasks?: ExportTask[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
