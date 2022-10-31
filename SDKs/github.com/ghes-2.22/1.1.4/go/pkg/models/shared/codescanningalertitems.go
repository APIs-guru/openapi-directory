package shared

import (
	"time"
)

type CodeScanningAlertItems struct {
	Classification  CodeScanningAlertClassificationEnum  `json:"classification"`
	CreatedAt       time.Time                            `json:"created_at"`
	DismissedAt     time.Time                            `json:"dismissed_at"`
	DismissedBy     SimpleUser                           `json:"dismissed_by"`
	DismissedReason CodeScanningAlertDismissedReasonEnum `json:"dismissed_reason"`
	HTMLURL         string                               `json:"html_url"`
	Instance        CodeScanningAlertInstance            `json:"instance"`
	Number          int64                                `json:"number"`
	Rule            CodeScanningAlertRuleSummary         `json:"rule"`
	State           CodeScanningAlertStateEnum           `json:"state"`
	Tool            CodeScanningAnalysisTool             `json:"tool"`
	URL             string                               `json:"url"`
}
