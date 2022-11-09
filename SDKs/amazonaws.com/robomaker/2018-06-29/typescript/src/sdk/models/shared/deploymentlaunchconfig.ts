import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeploymentLaunchConfig
/** 
 * Configuration information for a deployment launch.
**/
export class DeploymentLaunchConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=environmentVariables" })
  environmentVariables?: Map<string, string>;

  @Metadata({ data: "json, name=launchFile" })
  launchFile: string;

  @Metadata({ data: "json, name=packageName" })
  packageName: string;

  @Metadata({ data: "json, name=postLaunchFile" })
  postLaunchFile?: string;

  @Metadata({ data: "json, name=preLaunchFile" })
  preLaunchFile?: string;
}
