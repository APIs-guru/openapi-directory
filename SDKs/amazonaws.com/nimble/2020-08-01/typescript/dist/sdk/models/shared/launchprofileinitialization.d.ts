import { SpeakeasyBase } from "../../../internal/utils";
import { LaunchProfileInitializationActiveDirectory } from "./launchprofileinitializationactivedirectory";
import { LaunchProfilePlatformEnum } from "./launchprofileplatformenum";
import { LaunchProfileInitializationScript } from "./launchprofileinitializationscript";
export declare class LaunchProfileInitialization extends SpeakeasyBase {
    activeDirectory?: LaunchProfileInitializationActiveDirectory;
    ec2SecurityGroupIds?: string[];
    launchProfileId?: string;
    launchProfileProtocolVersion?: string;
    launchPurpose?: string;
    name?: string;
    platform?: LaunchProfilePlatformEnum;
    systemInitializationScripts?: LaunchProfileInitializationScript[];
    userInitializationScripts?: LaunchProfileInitializationScript[];
}
