import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeploymentLaunchConfig
/** 
 * Configuration information for a deployment launch.
**/
export class DeploymentLaunchConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environmentVariables" })
  environmentVariables?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=launchFile" })
  launchFile: string;

  @SpeakeasyMetadata({ data: "json, name=packageName" })
  packageName: string;

  @SpeakeasyMetadata({ data: "json, name=postLaunchFile" })
  postLaunchFile?: string;

  @SpeakeasyMetadata({ data: "json, name=preLaunchFile" })
  preLaunchFile?: string;
}
