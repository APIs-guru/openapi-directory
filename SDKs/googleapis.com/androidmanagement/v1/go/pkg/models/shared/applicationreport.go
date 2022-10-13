package shared

type ApplicationReportApplicationSourceEnum string

const (
	ApplicationReportApplicationSourceEnumApplicationSourceUnspecified ApplicationReportApplicationSourceEnum = "APPLICATION_SOURCE_UNSPECIFIED"
	ApplicationReportApplicationSourceEnumSystemAppFactoryVersion      ApplicationReportApplicationSourceEnum = "SYSTEM_APP_FACTORY_VERSION"
	ApplicationReportApplicationSourceEnumSystemAppUpdatedVersion      ApplicationReportApplicationSourceEnum = "SYSTEM_APP_UPDATED_VERSION"
	ApplicationReportApplicationSourceEnumInstalledFromPlayStore       ApplicationReportApplicationSourceEnum = "INSTALLED_FROM_PLAY_STORE"
)

type ApplicationReportStateEnum string

const (
	ApplicationReportStateEnumApplicationStateUnspecified ApplicationReportStateEnum = "APPLICATION_STATE_UNSPECIFIED"
	ApplicationReportStateEnumRemoved                     ApplicationReportStateEnum = "REMOVED"
	ApplicationReportStateEnumInstalled                   ApplicationReportStateEnum = "INSTALLED"
)

type ApplicationReport struct {
	ApplicationSource          *ApplicationReportApplicationSourceEnum `json:"applicationSource"`
	DisplayName                *string                                 `json:"displayName"`
	Events                     []ApplicationEvent                      `json:"events"`
	InstallerPackageName       *string                                 `json:"installerPackageName"`
	KeyedAppStates             []KeyedAppState                         `json:"keyedAppStates"`
	PackageName                *string                                 `json:"packageName"`
	PackageSha256Hash          *string                                 `json:"packageSha256Hash"`
	SigningKeyCertFingerprints []string                                `json:"signingKeyCertFingerprints"`
	State                      *ApplicationReportStateEnum             `json:"state"`
	VersionCode                *int32                                  `json:"versionCode"`
	VersionName                *string                                 `json:"versionName"`
}
