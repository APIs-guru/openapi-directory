import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExportTaskExecutionInfo } from "./exporttaskexecutioninfo";
import { ExportTaskStatus } from "./exporttaskstatus";


// ExportTask
/** 
 * Represents an export task.
**/
export class ExportTask extends SpeakeasyBase {
  @Metadata({ data: "json, name=destination" })
  destination?: string;

  @Metadata({ data: "json, name=destinationPrefix" })
  destinationPrefix?: string;

  @Metadata({ data: "json, name=executionInfo" })
  executionInfo?: ExportTaskExecutionInfo;

  @Metadata({ data: "json, name=from" })
  from?: number;

  @Metadata({ data: "json, name=logGroupName" })
  logGroupName?: string;

  @Metadata({ data: "json, name=status" })
  status?: ExportTaskStatus;

  @Metadata({ data: "json, name=taskId" })
  taskId?: string;

  @Metadata({ data: "json, name=taskName" })
  taskName?: string;

  @Metadata({ data: "json, name=to" })
  to?: number;
}
