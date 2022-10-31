package shared

type ComplianceRule struct {
	APILevelCondition            *APILevelCondition            `json:"apiLevelCondition,omitempty"`
	DisableApps                  *bool                         `json:"disableApps,omitempty"`
	NonComplianceDetailCondition *NonComplianceDetailCondition `json:"nonComplianceDetailCondition,omitempty"`
	PackageNamesToDisable        []string                      `json:"packageNamesToDisable,omitempty"`
}
