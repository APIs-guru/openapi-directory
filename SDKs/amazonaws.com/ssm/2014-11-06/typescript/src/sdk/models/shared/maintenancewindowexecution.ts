import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MaintenanceWindowExecutionStatusEnum } from "./maintenancewindowexecutionstatusenum";



// MaintenanceWindowExecution
/** 
 * Describes the information about an execution of a maintenance window. 
**/
export class MaintenanceWindowExecution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: MaintenanceWindowExecutionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusDetails" })
  statusDetails?: string;

  @SpeakeasyMetadata({ data: "json, name=WindowExecutionId" })
  windowExecutionId?: string;

  @SpeakeasyMetadata({ data: "json, name=WindowId" })
  windowId?: string;
}
