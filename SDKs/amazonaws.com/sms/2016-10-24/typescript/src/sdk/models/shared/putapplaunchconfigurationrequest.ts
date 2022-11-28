import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServerGroupLaunchConfiguration } from "./servergrouplaunchconfiguration";



export class PutAppLaunchConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId?: string;

  @SpeakeasyMetadata({ data: "json, name=autoLaunch" })
  autoLaunch?: boolean;

  @SpeakeasyMetadata({ data: "json, name=roleName" })
  roleName?: string;

  @SpeakeasyMetadata({ data: "json, name=serverGroupLaunchConfigurations", elemType: ServerGroupLaunchConfiguration })
  serverGroupLaunchConfigurations?: ServerGroupLaunchConfiguration[];
}
