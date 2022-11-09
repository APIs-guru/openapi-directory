import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExportTaskStatusCodeEnum } from "./exporttaskstatuscodeenum";


// ExportTaskStatus
/** 
 * Represents the status of an export task.
**/
export class ExportTaskStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: ExportTaskStatusCodeEnum;

  @Metadata({ data: "json, name=message" })
  message?: string;
}
