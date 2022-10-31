package shared




type CodeScanningAlertRuleSeverityEnum string

const (
    CodeScanningAlertRuleSeverityEnumNone CodeScanningAlertRuleSeverityEnum = "none"
CodeScanningAlertRuleSeverityEnumNote CodeScanningAlertRuleSeverityEnum = "note"
CodeScanningAlertRuleSeverityEnumWarning CodeScanningAlertRuleSeverityEnum = "warning"
CodeScanningAlertRuleSeverityEnumError CodeScanningAlertRuleSeverityEnum = "error"
)


type CodeScanningAlertRule struct {
    Description *string `json:"description,omitempty"`
    FullDescription *string `json:"full_description,omitempty"`
    Help *string `json:"help,omitempty"`
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    Severity *CodeScanningAlertRuleSeverityEnum `json:"severity,omitempty"`
    Tags []string `json:"tags,omitempty"`
    
}

