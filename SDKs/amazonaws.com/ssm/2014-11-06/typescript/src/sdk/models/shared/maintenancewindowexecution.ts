import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MaintenanceWindowExecutionStatusEnum } from "./maintenancewindowexecutionstatusenum";


// MaintenanceWindowExecution
/** 
 * Describes the information about an execution of a maintenance window. 
**/
export class MaintenanceWindowExecution extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=Status" })
  status?: MaintenanceWindowExecutionStatusEnum;

  @Metadata({ data: "json, name=StatusDetails" })
  statusDetails?: string;

  @Metadata({ data: "json, name=WindowExecutionId" })
  windowExecutionId?: string;

  @Metadata({ data: "json, name=WindowId" })
  windowId?: string;
}
