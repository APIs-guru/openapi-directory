import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExportTask } from "./exporttask";


export class DescribeExportTasksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=exportTasks", elemType: shared.ExportTask })
  exportTasks?: ExportTask[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
