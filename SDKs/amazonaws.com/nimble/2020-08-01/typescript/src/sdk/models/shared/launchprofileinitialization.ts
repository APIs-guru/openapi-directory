import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LaunchProfileInitializationActiveDirectory } from "./launchprofileinitializationactivedirectory";
import { LaunchProfilePlatformEnum } from "./launchprofileplatformenum";
import { LaunchProfileInitializationScript } from "./launchprofileinitializationscript";



export class LaunchProfileInitialization extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activeDirectory" })
  activeDirectory?: LaunchProfileInitializationActiveDirectory;

  @SpeakeasyMetadata({ data: "json, name=ec2SecurityGroupIds" })
  ec2SecurityGroupIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=launchProfileId" })
  launchProfileId?: string;

  @SpeakeasyMetadata({ data: "json, name=launchProfileProtocolVersion" })
  launchProfileProtocolVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=launchPurpose" })
  launchPurpose?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=platform" })
  platform?: LaunchProfilePlatformEnum;

  @SpeakeasyMetadata({ data: "json, name=systemInitializationScripts", elemType: LaunchProfileInitializationScript })
  systemInitializationScripts?: LaunchProfileInitializationScript[];

  @SpeakeasyMetadata({ data: "json, name=userInitializationScripts", elemType: LaunchProfileInitializationScript })
  userInitializationScripts?: LaunchProfileInitializationScript[];
}
