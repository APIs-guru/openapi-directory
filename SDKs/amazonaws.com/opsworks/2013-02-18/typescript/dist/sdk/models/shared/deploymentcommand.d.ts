import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentCommandNameEnum } from "./deploymentcommandnameenum";
/**
 * Used to specify a stack or deployment command.
**/
export declare class DeploymentCommand extends SpeakeasyBase {
    args?: Map<string, string[]>;
    name: DeploymentCommandNameEnum;
}
