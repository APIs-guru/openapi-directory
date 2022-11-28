package shared

type SystemUpdateInfoUpdateStatusEnum string

const (
	SystemUpdateInfoUpdateStatusEnumUpdateStatusUnknown     SystemUpdateInfoUpdateStatusEnum = "UPDATE_STATUS_UNKNOWN"
	SystemUpdateInfoUpdateStatusEnumUpToDate                SystemUpdateInfoUpdateStatusEnum = "UP_TO_DATE"
	SystemUpdateInfoUpdateStatusEnumUnknownUpdateAvailable  SystemUpdateInfoUpdateStatusEnum = "UNKNOWN_UPDATE_AVAILABLE"
	SystemUpdateInfoUpdateStatusEnumSecurityUpdateAvailable SystemUpdateInfoUpdateStatusEnum = "SECURITY_UPDATE_AVAILABLE"
	SystemUpdateInfoUpdateStatusEnumOsUpdateAvailable       SystemUpdateInfoUpdateStatusEnum = "OS_UPDATE_AVAILABLE"
)

// SystemUpdateInfo
// Information about a potential pending system update.
type SystemUpdateInfo struct {
	UpdateReceivedTime *string                           `json:"updateReceivedTime,omitempty"`
	UpdateStatus       *SystemUpdateInfoUpdateStatusEnum `json:"updateStatus,omitempty"`
}
