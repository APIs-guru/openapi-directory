import { SpeakeasyBase } from "../../../internal/utils";
import { AutoInstallConstraint } from "./autoinstallconstraint";
export declare enum AutoInstallPolicyAutoInstallModeEnum {
    AutoInstallModeUnspecified = "autoInstallModeUnspecified",
    DoNotAutoInstall = "doNotAutoInstall",
    AutoInstallOnce = "autoInstallOnce",
    ForceAutoInstall = "forceAutoInstall"
}
export declare class AutoInstallPolicy extends SpeakeasyBase {
    autoInstallConstraint?: AutoInstallConstraint[];
    autoInstallMode?: AutoInstallPolicyAutoInstallModeEnum;
    autoInstallPriority?: number;
    minimumVersionCode?: number;
}
