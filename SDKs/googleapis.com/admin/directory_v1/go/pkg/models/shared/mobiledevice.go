package shared

import (
	"time"
)

type MobileDeviceApplications struct {
	DisplayName *string  `json:"displayName"`
	PackageName *string  `json:"packageName"`
	Permission  []string `json:"permission"`
	VersionCode *int32   `json:"versionCode"`
	VersionName *string  `json:"versionName"`
}

type MobileDevice struct {
	AdbStatus                      *bool                      `json:"adbStatus"`
	Applications                   []MobileDeviceApplications `json:"applications"`
	BasebandVersion                *string                    `json:"basebandVersion"`
	BootloaderVersion              *string                    `json:"bootloaderVersion"`
	Brand                          *string                    `json:"brand"`
	BuildNumber                    *string                    `json:"buildNumber"`
	DefaultLanguage                *string                    `json:"defaultLanguage"`
	DeveloperOptionsStatus         *bool                      `json:"developerOptionsStatus"`
	DeviceCompromisedStatus        *string                    `json:"deviceCompromisedStatus"`
	DeviceID                       *string                    `json:"deviceId"`
	DevicePasswordStatus           *string                    `json:"devicePasswordStatus"`
	Email                          []string                   `json:"email"`
	EncryptionStatus               *string                    `json:"encryptionStatus"`
	Etag                           *string                    `json:"etag"`
	FirstSync                      *time.Time                 `json:"firstSync"`
	Hardware                       *string                    `json:"hardware"`
	HardwareID                     *string                    `json:"hardwareId"`
	Imei                           *string                    `json:"imei"`
	KernelVersion                  *string                    `json:"kernelVersion"`
	Kind                           *string                    `json:"kind"`
	LastSync                       *time.Time                 `json:"lastSync"`
	ManagedAccountIsOnOwnerProfile *bool                      `json:"managedAccountIsOnOwnerProfile"`
	Manufacturer                   *string                    `json:"manufacturer"`
	Meid                           *string                    `json:"meid"`
	Model                          *string                    `json:"model"`
	Name                           []string                   `json:"name"`
	NetworkOperator                *string                    `json:"networkOperator"`
	Os                             *string                    `json:"os"`
	OtherAccountsInfo              []string                   `json:"otherAccountsInfo"`
	Privilege                      *string                    `json:"privilege"`
	ReleaseVersion                 *string                    `json:"releaseVersion"`
	ResourceID                     *string                    `json:"resourceId"`
	SecurityPatchLevel             *string                    `json:"securityPatchLevel"`
	SerialNumber                   *string                    `json:"serialNumber"`
	Status                         *string                    `json:"status"`
	SupportsWorkProfile            *bool                      `json:"supportsWorkProfile"`
	Type                           *string                    `json:"type"`
	UnknownSourcesStatus           *bool                      `json:"unknownSourcesStatus"`
	UserAgent                      *string                    `json:"userAgent"`
	WifiMacAddress                 *string                    `json:"wifiMacAddress"`
}
