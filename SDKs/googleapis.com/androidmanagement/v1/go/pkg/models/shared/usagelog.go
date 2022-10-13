package shared

type UsageLogEnabledLogTypesEnum string

const (
	UsageLogEnabledLogTypesEnumLogTypeUnspecified  UsageLogEnabledLogTypesEnum = "LOG_TYPE_UNSPECIFIED"
	UsageLogEnabledLogTypesEnumSecurityLogs        UsageLogEnabledLogTypesEnum = "SECURITY_LOGS"
	UsageLogEnabledLogTypesEnumNetworkActivityLogs UsageLogEnabledLogTypesEnum = "NETWORK_ACTIVITY_LOGS"
)

type UsageLogUploadOnCellularAllowedEnum string

const (
	UsageLogUploadOnCellularAllowedEnumLogTypeUnspecified  UsageLogUploadOnCellularAllowedEnum = "LOG_TYPE_UNSPECIFIED"
	UsageLogUploadOnCellularAllowedEnumSecurityLogs        UsageLogUploadOnCellularAllowedEnum = "SECURITY_LOGS"
	UsageLogUploadOnCellularAllowedEnumNetworkActivityLogs UsageLogUploadOnCellularAllowedEnum = "NETWORK_ACTIVITY_LOGS"
)

type UsageLog struct {
	EnabledLogTypes         []UsageLogEnabledLogTypesEnum         `json:"enabledLogTypes"`
	UploadOnCellularAllowed []UsageLogUploadOnCellularAllowedEnum `json:"uploadOnCellularAllowed"`
}
