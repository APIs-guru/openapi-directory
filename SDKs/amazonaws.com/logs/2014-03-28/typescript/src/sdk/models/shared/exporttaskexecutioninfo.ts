import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ExportTaskExecutionInfo
/** 
 * Represents the status of an export task.
**/
export class ExportTaskExecutionInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=completionTime" })
  completionTime?: number;

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: number;
}
