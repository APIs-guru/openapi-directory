import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExportTaskExecutionInfo } from "./exporttaskexecutioninfo";
import { ExportTaskStatus } from "./exporttaskstatus";



// ExportTask
/** 
 * Represents an export task.
**/
export class ExportTask extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: string;

  @SpeakeasyMetadata({ data: "json, name=destinationPrefix" })
  destinationPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=executionInfo" })
  executionInfo?: ExportTaskExecutionInfo;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: number;

  @SpeakeasyMetadata({ data: "json, name=logGroupName" })
  logGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ExportTaskStatus;

  @SpeakeasyMetadata({ data: "json, name=taskId" })
  taskId?: string;

  @SpeakeasyMetadata({ data: "json, name=taskName" })
  taskName?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: number;
}
