package shared

type CommonCriteriaModeInfoCommonCriteriaModeStatusEnum string

const (
	CommonCriteriaModeInfoCommonCriteriaModeStatusEnumCommonCriteriaModeStatusUnknown CommonCriteriaModeInfoCommonCriteriaModeStatusEnum = "COMMON_CRITERIA_MODE_STATUS_UNKNOWN"
	CommonCriteriaModeInfoCommonCriteriaModeStatusEnumCommonCriteriaModeDisabled      CommonCriteriaModeInfoCommonCriteriaModeStatusEnum = "COMMON_CRITERIA_MODE_DISABLED"
	CommonCriteriaModeInfoCommonCriteriaModeStatusEnumCommonCriteriaModeEnabled       CommonCriteriaModeInfoCommonCriteriaModeStatusEnum = "COMMON_CRITERIA_MODE_ENABLED"
)

// CommonCriteriaModeInfo
// Information about Common Criteria Mode—security standards defined in the Common Criteria for Information Technology Security Evaluation (https://www.commoncriteriaportal.org/) (CC).This information is only available if statusReportingSettings.commonCriteriaModeEnabled is true in the device's policy.
type CommonCriteriaModeInfo struct {
	CommonCriteriaModeStatus *CommonCriteriaModeInfoCommonCriteriaModeStatusEnum `json:"commonCriteriaModeStatus,omitempty"`
}
