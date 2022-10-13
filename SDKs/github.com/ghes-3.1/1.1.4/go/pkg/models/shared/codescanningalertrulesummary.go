package shared

type CodeScanningAlertRuleSummarySeverityEnum string

const (
	CodeScanningAlertRuleSummarySeverityEnumNone    CodeScanningAlertRuleSummarySeverityEnum = "none"
	CodeScanningAlertRuleSummarySeverityEnumNote    CodeScanningAlertRuleSummarySeverityEnum = "note"
	CodeScanningAlertRuleSummarySeverityEnumWarning CodeScanningAlertRuleSummarySeverityEnum = "warning"
	CodeScanningAlertRuleSummarySeverityEnumError   CodeScanningAlertRuleSummarySeverityEnum = "error"
)

type CodeScanningAlertRuleSummary struct {
	Description *string                                   `json:"description"`
	ID          *string                                   `json:"id"`
	Name        *string                                   `json:"name"`
	Severity    *CodeScanningAlertRuleSummarySeverityEnum `json:"severity"`
}
