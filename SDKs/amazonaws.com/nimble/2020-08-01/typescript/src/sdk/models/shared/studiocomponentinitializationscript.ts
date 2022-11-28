import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LaunchProfilePlatformEnum } from "./launchprofileplatformenum";
import { StudioComponentInitializationScriptRunContextEnum } from "./studiocomponentinitializationscriptruncontextenum";



// StudioComponentInitializationScript
/** 
 * Initialization scripts for studio components.
**/
export class StudioComponentInitializationScript extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=launchProfileProtocolVersion" })
  launchProfileProtocolVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=platform" })
  platform?: LaunchProfilePlatformEnum;

  @SpeakeasyMetadata({ data: "json, name=runContext" })
  runContext?: StudioComponentInitializationScriptRunContextEnum;

  @SpeakeasyMetadata({ data: "json, name=script" })
  script?: string;
}
