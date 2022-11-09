import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MaintenanceWindowAutomationParameters } from "./maintenancewindowautomationparameters";
import { MaintenanceWindowLambdaParameters } from "./maintenancewindowlambdaparameters";
import { MaintenanceWindowRunCommandParameters } from "./maintenancewindowruncommandparameters";
import { MaintenanceWindowStepFunctionsParameters } from "./maintenancewindowstepfunctionsparameters";


// MaintenanceWindowTaskInvocationParameters
/** 
 * The parameters for task execution.
**/
export class MaintenanceWindowTaskInvocationParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=Automation" })
  automation?: MaintenanceWindowAutomationParameters;

  @Metadata({ data: "json, name=Lambda" })
  lambda?: MaintenanceWindowLambdaParameters;

  @Metadata({ data: "json, name=RunCommand" })
  runCommand?: MaintenanceWindowRunCommandParameters;

  @Metadata({ data: "json, name=StepFunctions" })
  stepFunctions?: MaintenanceWindowStepFunctionsParameters;
}
