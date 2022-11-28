import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MaintenanceWindowExecutionStatusEnum } from "./maintenancewindowexecutionstatusenum";
import { MaintenanceWindowTaskTypeEnum } from "./maintenancewindowtasktypeenum";



export class GetMaintenanceWindowExecutionTaskInvocationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ExecutionId" })
  executionId?: string;

  @SpeakeasyMetadata({ data: "json, name=InvocationId" })
  invocationId?: string;

  @SpeakeasyMetadata({ data: "json, name=OwnerInformation" })
  ownerInformation?: string;

  @SpeakeasyMetadata({ data: "json, name=Parameters" })
  parameters?: string;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: MaintenanceWindowExecutionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusDetails" })
  statusDetails?: string;

  @SpeakeasyMetadata({ data: "json, name=TaskExecutionId" })
  taskExecutionId?: string;

  @SpeakeasyMetadata({ data: "json, name=TaskType" })
  taskType?: MaintenanceWindowTaskTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=WindowExecutionId" })
  windowExecutionId?: string;

  @SpeakeasyMetadata({ data: "json, name=WindowTargetId" })
  windowTargetId?: string;
}
