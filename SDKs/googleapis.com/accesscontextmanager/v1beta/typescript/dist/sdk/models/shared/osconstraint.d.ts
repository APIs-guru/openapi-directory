import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum OsConstraintOsTypeEnum {
    OsUnspecified = "OS_UNSPECIFIED",
    DesktopMac = "DESKTOP_MAC",
    DesktopWindows = "DESKTOP_WINDOWS",
    DesktopLinux = "DESKTOP_LINUX",
    DesktopChromeOs = "DESKTOP_CHROME_OS",
    Android = "ANDROID",
    Ios = "IOS"
}
/**
 * A restriction on the OS type and version of devices making requests.
**/
export declare class OsConstraint extends SpeakeasyBase {
    minimumVersion?: string;
    osType?: OsConstraintOsTypeEnum;
    requireVerifiedChromeOs?: boolean;
}
