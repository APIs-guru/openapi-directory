import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MaintenanceWindowExecutionStatusEnum } from "./maintenancewindowexecutionstatusenum";
import { MaintenanceWindowTaskTypeEnum } from "./maintenancewindowtasktypeenum";


// MaintenanceWindowExecutionTaskInvocationIdentity
/** 
 * Describes the information about a task invocation for a particular target as part of a task execution performed as part of a maintenance window execution.
**/
export class MaintenanceWindowExecutionTaskInvocationIdentity extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=ExecutionId" })
  executionId?: string;

  @Metadata({ data: "json, name=InvocationId" })
  invocationId?: string;

  @Metadata({ data: "json, name=OwnerInformation" })
  ownerInformation?: string;

  @Metadata({ data: "json, name=Parameters" })
  parameters?: string;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=Status" })
  status?: MaintenanceWindowExecutionStatusEnum;

  @Metadata({ data: "json, name=StatusDetails" })
  statusDetails?: string;

  @Metadata({ data: "json, name=TaskExecutionId" })
  taskExecutionId?: string;

  @Metadata({ data: "json, name=TaskType" })
  taskType?: MaintenanceWindowTaskTypeEnum;

  @Metadata({ data: "json, name=WindowExecutionId" })
  windowExecutionId?: string;

  @Metadata({ data: "json, name=WindowTargetId" })
  windowTargetId?: string;
}
