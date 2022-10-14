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
	ApplicationSource          *ApplicationReportApplicationSourceEnum `json:"applicationSource,omitempty"`
	DisplayName                *string                                 `json:"displayName,omitempty"`
	Events                     []ApplicationEvent                      `json:"events,omitempty"`
	InstallerPackageName       *string                                 `json:"installerPackageName,omitempty"`
	KeyedAppStates             []KeyedAppState                         `json:"keyedAppStates,omitempty"`
	PackageName                *string                                 `json:"packageName,omitempty"`
	PackageSha256Hash          *string                                 `json:"packageSha256Hash,omitempty"`
	SigningKeyCertFingerprints []string                                `json:"signingKeyCertFingerprints,omitempty"`
	State                      *ApplicationReportStateEnum             `json:"state,omitempty"`
	VersionCode                *int32                                  `json:"versionCode,omitempty"`
	VersionName                *string                                 `json:"versionName,omitempty"`
}
