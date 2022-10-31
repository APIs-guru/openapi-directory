package shared




type OsConstraintOsTypeEnum string

const (
    OsConstraintOsTypeEnumOsUnspecified OsConstraintOsTypeEnum = "OS_UNSPECIFIED"
OsConstraintOsTypeEnumDesktopMac OsConstraintOsTypeEnum = "DESKTOP_MAC"
OsConstraintOsTypeEnumDesktopWindows OsConstraintOsTypeEnum = "DESKTOP_WINDOWS"
OsConstraintOsTypeEnumDesktopLinux OsConstraintOsTypeEnum = "DESKTOP_LINUX"
OsConstraintOsTypeEnumDesktopChromeOs OsConstraintOsTypeEnum = "DESKTOP_CHROME_OS"
OsConstraintOsTypeEnumAndroid OsConstraintOsTypeEnum = "ANDROID"
OsConstraintOsTypeEnumIos OsConstraintOsTypeEnum = "IOS"
)


type OsConstraint struct {
    MinimumVersion *string `json:"minimumVersion,omitempty"`
    OsType *OsConstraintOsTypeEnum `json:"osType,omitempty"`
    RequireVerifiedChromeOs *bool `json:"requireVerifiedChromeOs,omitempty"`
    
}

