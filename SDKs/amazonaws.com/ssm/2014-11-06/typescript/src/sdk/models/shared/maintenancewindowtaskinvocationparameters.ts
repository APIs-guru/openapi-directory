import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MaintenanceWindowAutomationParameters } from "./maintenancewindowautomationparameters";
import { MaintenanceWindowLambdaParameters } from "./maintenancewindowlambdaparameters";
import { MaintenanceWindowRunCommandParameters } from "./maintenancewindowruncommandparameters";
import { MaintenanceWindowStepFunctionsParameters } from "./maintenancewindowstepfunctionsparameters";



// MaintenanceWindowTaskInvocationParameters
/** 
 * The parameters for task execution.
**/
export class MaintenanceWindowTaskInvocationParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Automation" })
  automation?: MaintenanceWindowAutomationParameters;

  @SpeakeasyMetadata({ data: "json, name=Lambda" })
  lambda?: MaintenanceWindowLambdaParameters;

  @SpeakeasyMetadata({ data: "json, name=RunCommand" })
  runCommand?: MaintenanceWindowRunCommandParameters;

  @SpeakeasyMetadata({ data: "json, name=StepFunctions" })
  stepFunctions?: MaintenanceWindowStepFunctionsParameters;
}
