import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MaintenanceWindowExecutionStatusEnum } from "./maintenancewindowexecutionstatusenum";
import { MaintenanceWindowTaskParameterValueExpression } from "./maintenancewindowtaskparametervalueexpression";
import { MaintenanceWindowTaskTypeEnum } from "./maintenancewindowtasktypeenum";



export class GetMaintenanceWindowExecutionTaskResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=MaxConcurrency" })
  maxConcurrency?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxErrors" })
  maxErrors?: string;

  @SpeakeasyMetadata({ data: "json, name=Priority" })
  priority?: number;

  @SpeakeasyMetadata({ data: "json, name=ServiceRole" })
  serviceRole?: string;

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

  @SpeakeasyMetadata({ data: "json, name=TaskParameters", elemType: MaintenanceWindowTaskParameterValueExpression, elemDepth: 2 })
  taskParameters?: Map<string, MaintenanceWindowTaskParameterValueExpression>[];

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: MaintenanceWindowTaskTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=WindowExecutionId" })
  windowExecutionId?: string;
}
