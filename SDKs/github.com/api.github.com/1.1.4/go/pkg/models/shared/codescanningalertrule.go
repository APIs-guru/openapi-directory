package shared

type CodeScanningAlertRuleSeverityEnum string

const (
	CodeScanningAlertRuleSeverityEnumNone    CodeScanningAlertRuleSeverityEnum = "none"
	CodeScanningAlertRuleSeverityEnumNote    CodeScanningAlertRuleSeverityEnum = "note"
	CodeScanningAlertRuleSeverityEnumWarning CodeScanningAlertRuleSeverityEnum = "warning"
	CodeScanningAlertRuleSeverityEnumError   CodeScanningAlertRuleSeverityEnum = "error"
)

type CodeScanningAlertRule struct {
	Description     *string                            `json:"description"`
	FullDescription *string                            `json:"full_description"`
	Help            *string                            `json:"help"`
	ID              *string                            `json:"id"`
	Name            *string                            `json:"name"`
	Severity        *CodeScanningAlertRuleSeverityEnum `json:"severity"`
	Tags            []string                           `json:"tags"`
}
