import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AutoInstallConstraint } from "./autoinstallconstraint";

export enum AutoInstallPolicyAutoInstallModeEnum {
    AutoInstallModeUnspecified = "autoInstallModeUnspecified"
,    DoNotAutoInstall = "doNotAutoInstall"
,    AutoInstallOnce = "autoInstallOnce"
,    ForceAutoInstall = "forceAutoInstall"
}


export class AutoInstallPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoInstallConstraint", elemType: shared.AutoInstallConstraint })
  autoInstallConstraint?: AutoInstallConstraint[];

  @Metadata({ data: "json, name=autoInstallMode" })
  autoInstallMode?: AutoInstallPolicyAutoInstallModeEnum;

  @Metadata({ data: "json, name=autoInstallPriority" })
  autoInstallPriority?: number;

  @Metadata({ data: "json, name=minimumVersionCode" })
  minimumVersionCode?: number;
}
