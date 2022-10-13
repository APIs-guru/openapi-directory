package shared

type ComplianceRule struct {
	APILevelCondition            *APILevelCondition            `json:"apiLevelCondition"`
	DisableApps                  *bool                         `json:"disableApps"`
	NonComplianceDetailCondition *NonComplianceDetailCondition `json:"nonComplianceDetailCondition"`
	PackageNamesToDisable        []string                      `json:"packageNamesToDisable"`
}
