import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExportTaskStatusCodeEnum } from "./exporttaskstatuscodeenum";



// ExportTaskStatus
/** 
 * Represents the status of an export task.
**/
export class ExportTaskStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: ExportTaskStatusCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
