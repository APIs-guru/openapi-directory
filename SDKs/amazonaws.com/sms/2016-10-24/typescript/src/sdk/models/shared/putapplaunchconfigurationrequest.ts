import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ServerGroupLaunchConfiguration } from "./servergrouplaunchconfiguration";


export class PutAppLaunchConfigurationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=appId" })
  appId?: string;

  @Metadata({ data: "json, name=autoLaunch" })
  autoLaunch?: boolean;

  @Metadata({ data: "json, name=roleName" })
  roleName?: string;

  @Metadata({ data: "json, name=serverGroupLaunchConfigurations", elemType: shared.ServerGroupLaunchConfiguration })
  serverGroupLaunchConfigurations?: ServerGroupLaunchConfiguration[];
}
