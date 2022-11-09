import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LoggingInfo } from "./logginginfo";
import { Target } from "./target";
import { MaintenanceWindowTaskInvocationParameters } from "./maintenancewindowtaskinvocationparameters";
import { MaintenanceWindowTaskParameterValueExpression } from "./maintenancewindowtaskparametervalueexpression";


export class UpdateMaintenanceWindowTaskResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=LoggingInfo" })
  loggingInfo?: LoggingInfo;

  @Metadata({ data: "json, name=MaxConcurrency" })
  maxConcurrency?: string;

  @Metadata({ data: "json, name=MaxErrors" })
  maxErrors?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Priority" })
  priority?: number;

  @Metadata({ data: "json, name=ServiceRoleArn" })
  serviceRoleArn?: string;

  @Metadata({ data: "json, name=Targets", elemType: shared.Target })
  targets?: Target[];

  @Metadata({ data: "json, name=TaskArn" })
  taskArn?: string;

  @Metadata({ data: "json, name=TaskInvocationParameters" })
  taskInvocationParameters?: MaintenanceWindowTaskInvocationParameters;

  @Metadata({ data: "json, name=TaskParameters", elemType: shared.MaintenanceWindowTaskParameterValueExpression })
  taskParameters?: Map<string, MaintenanceWindowTaskParameterValueExpression>;

  @Metadata({ data: "json, name=WindowId" })
  windowId?: string;

  @Metadata({ data: "json, name=WindowTaskId" })
  windowTaskId?: string;
}
