import { SpeakeasyBase } from "../../../internal/utils";
import { MaintenanceWindowAutomationParameters } from "./maintenancewindowautomationparameters";
import { MaintenanceWindowLambdaParameters } from "./maintenancewindowlambdaparameters";
import { MaintenanceWindowRunCommandParameters } from "./maintenancewindowruncommandparameters";
import { MaintenanceWindowStepFunctionsParameters } from "./maintenancewindowstepfunctionsparameters";
/**
 * The parameters for task execution.
**/
export declare class MaintenanceWindowTaskInvocationParameters extends SpeakeasyBase {
    automation?: MaintenanceWindowAutomationParameters;
    lambda?: MaintenanceWindowLambdaParameters;
    runCommand?: MaintenanceWindowRunCommandParameters;
    stepFunctions?: MaintenanceWindowStepFunctionsParameters;
}
