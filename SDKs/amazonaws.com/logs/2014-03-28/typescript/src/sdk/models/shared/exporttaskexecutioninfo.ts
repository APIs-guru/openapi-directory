import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExportTaskExecutionInfo
/** 
 * Represents the status of an export task.
**/
export class ExportTaskExecutionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=completionTime" })
  completionTime?: number;

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: number;
}
