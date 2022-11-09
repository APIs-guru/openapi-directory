import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExportTaskStatusCodeEnum } from "./exporttaskstatuscodeenum";


export class DescribeExportTasksRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=statusCode" })
  statusCode?: ExportTaskStatusCodeEnum;

  @Metadata({ data: "json, name=taskId" })
  taskId?: string;
}
