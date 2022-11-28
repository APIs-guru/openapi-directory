package shared

// ComplianceRule
// A rule declaring which mitigating actions to take when a device is not compliant with its policy. For every rule, there is always an implicit mitigating action to set policy_compliant to false for the Device resource, and display a message on the device indicating that the device is not compliant with its policy. Other mitigating actions may optionally be taken as well, depending on the field values in the rule.
type ComplianceRule struct {
	APILevelCondition            *APILevelCondition            `json:"apiLevelCondition,omitempty"`
	DisableApps                  *bool                         `json:"disableApps,omitempty"`
	NonComplianceDetailCondition *NonComplianceDetailCondition `json:"nonComplianceDetailCondition,omitempty"`
	PackageNamesToDisable        []string                      `json:"packageNamesToDisable,omitempty"`
}
