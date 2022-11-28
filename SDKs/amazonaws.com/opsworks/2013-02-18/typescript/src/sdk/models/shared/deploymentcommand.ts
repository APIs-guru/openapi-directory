import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeploymentCommandNameEnum } from "./deploymentcommandnameenum";



// DeploymentCommand
/** 
 * Used to specify a stack or deployment command.
**/
export class DeploymentCommand extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Args" })
  args?: Map<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: DeploymentCommandNameEnum;
}
