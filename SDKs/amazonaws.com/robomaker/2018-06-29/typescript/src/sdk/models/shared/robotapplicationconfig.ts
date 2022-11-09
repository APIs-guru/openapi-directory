import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LaunchConfig } from "./launchconfig";
import { Tool } from "./tool";
import { UploadConfiguration } from "./uploadconfiguration";


// RobotApplicationConfig
/** 
 * Application configuration information for a robot.
**/
export class RobotApplicationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=application" })
  application: string;

  @Metadata({ data: "json, name=applicationVersion" })
  applicationVersion?: string;

  @Metadata({ data: "json, name=launchConfig" })
  launchConfig: LaunchConfig;

  @Metadata({ data: "json, name=tools", elemType: shared.Tool })
  tools?: Tool[];

  @Metadata({ data: "json, name=uploadConfigurations", elemType: shared.UploadConfiguration })
  uploadConfigurations?: UploadConfiguration[];

  @Metadata({ data: "json, name=useDefaultTools" })
  useDefaultTools?: boolean;

  @Metadata({ data: "json, name=useDefaultUploadConfigurations" })
  useDefaultUploadConfigurations?: boolean;
}
