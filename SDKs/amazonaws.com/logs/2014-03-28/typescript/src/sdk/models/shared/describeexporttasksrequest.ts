import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExportTaskStatusCodeEnum } from "./exporttaskstatuscodeenum";



export class DescribeExportTasksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: ExportTaskStatusCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=taskId" })
  taskId?: string;
}
