import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum OsConstraintOsTypeEnum {
    OsUnspecified = "OS_UNSPECIFIED"
,    DesktopMac = "DESKTOP_MAC"
,    DesktopWindows = "DESKTOP_WINDOWS"
,    DesktopLinux = "DESKTOP_LINUX"
,    DesktopChromeOs = "DESKTOP_CHROME_OS"
,    Android = "ANDROID"
,    Ios = "IOS"
}


// OsConstraint
/** 
 * A restriction on the OS type and version of devices making requests.
**/
export class OsConstraint extends SpeakeasyBase {
  @Metadata({ data: "json, name=minimumVersion" })
  minimumVersion?: string;

  @Metadata({ data: "json, name=osType" })
  osType?: OsConstraintOsTypeEnum;

  @Metadata({ data: "json, name=requireVerifiedChromeOs" })
  requireVerifiedChromeOs?: boolean;
}
