import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LaunchConfig } from "./launchconfig";
import { Tool } from "./tool";
import { UploadConfiguration } from "./uploadconfiguration";



// RobotApplicationConfig
/** 
 * Application configuration information for a robot.
**/
export class RobotApplicationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=application" })
  application: string;

  @SpeakeasyMetadata({ data: "json, name=applicationVersion" })
  applicationVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=launchConfig" })
  launchConfig: LaunchConfig;

  @SpeakeasyMetadata({ data: "json, name=tools", elemType: Tool })
  tools?: Tool[];

  @SpeakeasyMetadata({ data: "json, name=uploadConfigurations", elemType: UploadConfiguration })
  uploadConfigurations?: UploadConfiguration[];

  @SpeakeasyMetadata({ data: "json, name=useDefaultTools" })
  useDefaultTools?: boolean;

  @SpeakeasyMetadata({ data: "json, name=useDefaultUploadConfigurations" })
  useDefaultUploadConfigurations?: boolean;
}
