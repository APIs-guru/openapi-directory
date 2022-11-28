import { SpeakeasyBase } from "../../../internal/utils";
import { LaunchProfilePlatformEnum } from "./launchprofileplatformenum";
import { StudioComponentInitializationScriptRunContextEnum } from "./studiocomponentinitializationscriptruncontextenum";
/**
 * Initialization scripts for studio components.
**/
export declare class StudioComponentInitializationScript extends SpeakeasyBase {
    launchProfileProtocolVersion?: string;
    platform?: LaunchProfilePlatformEnum;
    runContext?: StudioComponentInitializationScriptRunContextEnum;
    script?: string;
}
