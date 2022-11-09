import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MaintenanceWindowExecutionStatusEnum } from "./maintenancewindowexecutionstatusenum";
import { MaintenanceWindowTaskTypeEnum } from "./maintenancewindowtasktypeenum";


// MaintenanceWindowExecutionTaskIdentity
/** 
 * Information about a task execution performed as part of a maintenance window execution.
**/
export class MaintenanceWindowExecutionTaskIdentity extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=Status" })
  status?: MaintenanceWindowExecutionStatusEnum;

  @Metadata({ data: "json, name=StatusDetails" })
  statusDetails?: string;

  @Metadata({ data: "json, name=TaskArn" })
  taskArn?: string;

  @Metadata({ data: "json, name=TaskExecutionId" })
  taskExecutionId?: string;

  @Metadata({ data: "json, name=TaskType" })
  taskType?: MaintenanceWindowTaskTypeEnum;

  @Metadata({ data: "json, name=WindowExecutionId" })
  windowExecutionId?: string;
}
