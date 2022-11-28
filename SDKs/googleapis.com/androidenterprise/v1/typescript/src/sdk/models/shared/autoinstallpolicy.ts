import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoInstallConstraint } from "./autoinstallconstraint";


export enum AutoInstallPolicyAutoInstallModeEnum {
    AutoInstallModeUnspecified = "autoInstallModeUnspecified",
    DoNotAutoInstall = "doNotAutoInstall",
    AutoInstallOnce = "autoInstallOnce",
    ForceAutoInstall = "forceAutoInstall"
}


export class AutoInstallPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoInstallConstraint", elemType: AutoInstallConstraint })
  autoInstallConstraint?: AutoInstallConstraint[];

  @SpeakeasyMetadata({ data: "json, name=autoInstallMode" })
  autoInstallMode?: AutoInstallPolicyAutoInstallModeEnum;

  @SpeakeasyMetadata({ data: "json, name=autoInstallPriority" })
  autoInstallPriority?: number;

  @SpeakeasyMetadata({ data: "json, name=minimumVersionCode" })
  minimumVersionCode?: number;
}
