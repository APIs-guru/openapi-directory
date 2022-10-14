package shared

type CodeScanningAlertRuleSummarySeverityEnum string

const (
	CodeScanningAlertRuleSummarySeverityEnumNone    CodeScanningAlertRuleSummarySeverityEnum = "none"
	CodeScanningAlertRuleSummarySeverityEnumNote    CodeScanningAlertRuleSummarySeverityEnum = "note"
	CodeScanningAlertRuleSummarySeverityEnumWarning CodeScanningAlertRuleSummarySeverityEnum = "warning"
	CodeScanningAlertRuleSummarySeverityEnumError   CodeScanningAlertRuleSummarySeverityEnum = "error"
)

type CodeScanningAlertRuleSummary struct {
	Description *string                                   `json:"description,omitempty"`
	ID          *string                                   `json:"id,omitempty"`
	Name        *string                                   `json:"name,omitempty"`
	Severity    *CodeScanningAlertRuleSummarySeverityEnum `json:"severity,omitempty"`
}
