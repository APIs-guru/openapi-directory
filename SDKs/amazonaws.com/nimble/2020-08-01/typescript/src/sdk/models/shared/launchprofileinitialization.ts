import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LaunchProfileInitializationActiveDirectory } from "./launchprofileinitializationactivedirectory";
import { LaunchProfilePlatformEnum } from "./launchprofileplatformenum";
import { LaunchProfileInitializationScript } from "./launchprofileinitializationscript";
import { LaunchProfileInitializationScript } from "./launchprofileinitializationscript";


export class LaunchProfileInitialization extends SpeakeasyBase {
  @Metadata({ data: "json, name=activeDirectory" })
  activeDirectory?: LaunchProfileInitializationActiveDirectory;

  @Metadata({ data: "json, name=ec2SecurityGroupIds" })
  ec2SecurityGroupIds?: string[];

  @Metadata({ data: "json, name=launchProfileId" })
  launchProfileId?: string;

  @Metadata({ data: "json, name=launchProfileProtocolVersion" })
  launchProfileProtocolVersion?: string;

  @Metadata({ data: "json, name=launchPurpose" })
  launchPurpose?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=platform" })
  platform?: LaunchProfilePlatformEnum;

  @Metadata({ data: "json, name=systemInitializationScripts", elemType: shared.LaunchProfileInitializationScript })
  systemInitializationScripts?: LaunchProfileInitializationScript[];

  @Metadata({ data: "json, name=userInitializationScripts", elemType: shared.LaunchProfileInitializationScript })
  userInitializationScripts?: LaunchProfileInitializationScript[];
}
