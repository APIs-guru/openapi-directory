import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeploymentLaunchConfig } from "./deploymentlaunchconfig";



// DeploymentApplicationConfig
/** 
 * Information about a deployment application configuration.
**/
export class DeploymentApplicationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=application" })
  application: string;

  @SpeakeasyMetadata({ data: "json, name=applicationVersion" })
  applicationVersion: string;

  @SpeakeasyMetadata({ data: "json, name=launchConfig" })
  launchConfig: DeploymentLaunchConfig;
}
