import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MaintenanceWindowExecutionStatusEnum } from "./maintenancewindowexecutionstatusenum";



export class GetMaintenanceWindowExecutionResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: MaintenanceWindowExecutionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusDetails" })
  statusDetails?: string;

  @SpeakeasyMetadata({ data: "json, name=TaskIds" })
  taskIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=WindowExecutionId" })
  windowExecutionId?: string;
}
