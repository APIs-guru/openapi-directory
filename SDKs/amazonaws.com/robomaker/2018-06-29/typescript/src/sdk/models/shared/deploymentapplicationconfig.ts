import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeploymentLaunchConfig } from "./deploymentlaunchconfig";


// DeploymentApplicationConfig
/** 
 * Information about a deployment application configuration.
**/
export class DeploymentApplicationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=application" })
  application: string;

  @Metadata({ data: "json, name=applicationVersion" })
  applicationVersion: string;

  @Metadata({ data: "json, name=launchConfig" })
  launchConfig: DeploymentLaunchConfig;
}
