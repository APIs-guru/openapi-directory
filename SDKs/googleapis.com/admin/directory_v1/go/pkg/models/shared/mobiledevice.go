package shared

import (
	"time"
)

type MobileDeviceApplications struct {
	DisplayName *string  `json:"displayName,omitempty"`
	PackageName *string  `json:"packageName,omitempty"`
	Permission  []string `json:"permission,omitempty"`
	VersionCode *int32   `json:"versionCode,omitempty"`
	VersionName *string  `json:"versionName,omitempty"`
}

// MobileDevice
// Google Workspace Mobile Management includes Android, [Google Sync](https://support.google.com/a/answer/135937), and iOS devices. For more information about common group mobile device API tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-mobile-devices.html).
type MobileDevice struct {
	AdbStatus                      *bool                      `json:"adbStatus,omitempty"`
	Applications                   []MobileDeviceApplications `json:"applications,omitempty"`
	BasebandVersion                *string                    `json:"basebandVersion,omitempty"`
	BootloaderVersion              *string                    `json:"bootloaderVersion,omitempty"`
	Brand                          *string                    `json:"brand,omitempty"`
	BuildNumber                    *string                    `json:"buildNumber,omitempty"`
	DefaultLanguage                *string                    `json:"defaultLanguage,omitempty"`
	DeveloperOptionsStatus         *bool                      `json:"developerOptionsStatus,omitempty"`
	DeviceCompromisedStatus        *string                    `json:"deviceCompromisedStatus,omitempty"`
	DeviceID                       *string                    `json:"deviceId,omitempty"`
	DevicePasswordStatus           *string                    `json:"devicePasswordStatus,omitempty"`
	Email                          []string                   `json:"email,omitempty"`
	EncryptionStatus               *string                    `json:"encryptionStatus,omitempty"`
	Etag                           *string                    `json:"etag,omitempty"`
	FirstSync                      *time.Time                 `json:"firstSync,omitempty"`
	Hardware                       *string                    `json:"hardware,omitempty"`
	HardwareID                     *string                    `json:"hardwareId,omitempty"`
	Imei                           *string                    `json:"imei,omitempty"`
	KernelVersion                  *string                    `json:"kernelVersion,omitempty"`
	Kind                           *string                    `json:"kind,omitempty"`
	LastSync                       *time.Time                 `json:"lastSync,omitempty"`
	ManagedAccountIsOnOwnerProfile *bool                      `json:"managedAccountIsOnOwnerProfile,omitempty"`
	Manufacturer                   *string                    `json:"manufacturer,omitempty"`
	Meid                           *string                    `json:"meid,omitempty"`
	Model                          *string                    `json:"model,omitempty"`
	Name                           []string                   `json:"name,omitempty"`
	NetworkOperator                *string                    `json:"networkOperator,omitempty"`
	Os                             *string                    `json:"os,omitempty"`
	OtherAccountsInfo              []string                   `json:"otherAccountsInfo,omitempty"`
	Privilege                      *string                    `json:"privilege,omitempty"`
	ReleaseVersion                 *string                    `json:"releaseVersion,omitempty"`
	ResourceID                     *string                    `json:"resourceId,omitempty"`
	SecurityPatchLevel             *string                    `json:"securityPatchLevel,omitempty"`
	SerialNumber                   *string                    `json:"serialNumber,omitempty"`
	Status                         *string                    `json:"status,omitempty"`
	SupportsWorkProfile            *bool                      `json:"supportsWorkProfile,omitempty"`
	Type                           *string                    `json:"type,omitempty"`
	UnknownSourcesStatus           *bool                      `json:"unknownSourcesStatus,omitempty"`
	UserAgent                      *string                    `json:"userAgent,omitempty"`
	WifiMacAddress                 *string                    `json:"wifiMacAddress,omitempty"`
}
