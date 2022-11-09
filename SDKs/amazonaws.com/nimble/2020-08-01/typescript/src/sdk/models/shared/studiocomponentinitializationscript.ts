import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LaunchProfilePlatformEnum } from "./launchprofileplatformenum";
import { StudioComponentInitializationScriptRunContextEnum } from "./studiocomponentinitializationscriptruncontextenum";


// StudioComponentInitializationScript
/** 
 * Initialization scripts for studio components.
**/
export class StudioComponentInitializationScript extends SpeakeasyBase {
  @Metadata({ data: "json, name=launchProfileProtocolVersion" })
  launchProfileProtocolVersion?: string;

  @Metadata({ data: "json, name=platform" })
  platform?: LaunchProfilePlatformEnum;

  @Metadata({ data: "json, name=runContext" })
  runContext?: StudioComponentInitializationScriptRunContextEnum;

  @Metadata({ data: "json, name=script" })
  script?: string;
}
