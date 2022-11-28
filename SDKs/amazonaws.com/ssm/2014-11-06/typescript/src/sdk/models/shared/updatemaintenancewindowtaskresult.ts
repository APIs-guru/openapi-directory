import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoggingInfo } from "./logginginfo";
import { Target } from "./target";
import { MaintenanceWindowTaskInvocationParameters } from "./maintenancewindowtaskinvocationparameters";
import { MaintenanceWindowTaskParameterValueExpression } from "./maintenancewindowtaskparametervalueexpression";



export class UpdateMaintenanceWindowTaskResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=LoggingInfo" })
  loggingInfo?: LoggingInfo;

  @SpeakeasyMetadata({ data: "json, name=MaxConcurrency" })
  maxConcurrency?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxErrors" })
  maxErrors?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Priority" })
  priority?: number;

  @SpeakeasyMetadata({ data: "json, name=ServiceRoleArn" })
  serviceRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Targets", elemType: Target })
  targets?: Target[];

  @SpeakeasyMetadata({ data: "json, name=TaskArn" })
  taskArn?: string;

  @SpeakeasyMetadata({ data: "json, name=TaskInvocationParameters" })
  taskInvocationParameters?: MaintenanceWindowTaskInvocationParameters;

  @SpeakeasyMetadata({ data: "json, name=TaskParameters", elemType: MaintenanceWindowTaskParameterValueExpression })
  taskParameters?: Map<string, MaintenanceWindowTaskParameterValueExpression>;

  @SpeakeasyMetadata({ data: "json, name=WindowId" })
  windowId?: string;

  @SpeakeasyMetadata({ data: "json, name=WindowTaskId" })
  windowTaskId?: string;
}
