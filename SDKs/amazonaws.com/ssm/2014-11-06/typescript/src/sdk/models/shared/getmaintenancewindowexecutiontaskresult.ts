import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MaintenanceWindowExecutionStatusEnum } from "./maintenancewindowexecutionstatusenum";
import { MaintenanceWindowTaskParameterValueExpression } from "./maintenancewindowtaskparametervalueexpression";
import { MaintenanceWindowTaskTypeEnum } from "./maintenancewindowtasktypeenum";


export class GetMaintenanceWindowExecutionTaskResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=MaxConcurrency" })
  maxConcurrency?: string;

  @Metadata({ data: "json, name=MaxErrors" })
  maxErrors?: string;

  @Metadata({ data: "json, name=Priority" })
  priority?: number;

  @Metadata({ data: "json, name=ServiceRole" })
  serviceRole?: string;

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

  @Metadata({ data: "json, name=TaskParameters", elemType: shared.MaintenanceWindowTaskParameterValueExpression, elemDepth: 2 })
  taskParameters?: Map<string, MaintenanceWindowTaskParameterValueExpression>[];

  @Metadata({ data: "json, name=Type" })
  type?: MaintenanceWindowTaskTypeEnum;

  @Metadata({ data: "json, name=WindowExecutionId" })
  windowExecutionId?: string;
}
