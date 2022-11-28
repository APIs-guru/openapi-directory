import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MaintenanceWindowExecutionStatusEnum } from "./maintenancewindowexecutionstatusenum";
import { MaintenanceWindowTaskTypeEnum } from "./maintenancewindowtasktypeenum";



// MaintenanceWindowExecutionTaskIdentity
/** 
 * Information about a task execution performed as part of a maintenance window execution.
**/
export class MaintenanceWindowExecutionTaskIdentity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: MaintenanceWindowExecutionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusDetails" })
  statusDetails?: string;

  @SpeakeasyMetadata({ data: "json, name=TaskArn" })
  taskArn?: string;

  @SpeakeasyMetadata({ data: "json, name=TaskExecutionId" })
  taskExecutionId?: string;

  @SpeakeasyMetadata({ data: "json, name=TaskType" })
  taskType?: MaintenanceWindowTaskTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=WindowExecutionId" })
  windowExecutionId?: string;
}
