import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MaintenanceWindowExecutionStatusEnum } from "./maintenancewindowexecutionstatusenum";


export class GetMaintenanceWindowExecutionResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=Status" })
  status?: MaintenanceWindowExecutionStatusEnum;

  @Metadata({ data: "json, name=StatusDetails" })
  statusDetails?: string;

  @Metadata({ data: "json, name=TaskIds" })
  taskIds?: string[];

  @Metadata({ data: "json, name=WindowExecutionId" })
  windowExecutionId?: string;
}
