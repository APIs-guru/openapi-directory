import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeploymentCommandNameEnum } from "./deploymentcommandnameenum";


// DeploymentCommand
/** 
 * Used to specify a stack or deployment command.
**/
export class DeploymentCommand extends SpeakeasyBase {
  @Metadata({ data: "json, name=Args" })
  args?: Map<string, string[]>;

  @Metadata({ data: "json, name=Name" })
  name: DeploymentCommandNameEnum;
}
