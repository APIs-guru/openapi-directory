package shared




type CodeScanningAlertDismissedReasonEnum string

const (
    CodeScanningAlertDismissedReasonEnumFalsePositive CodeScanningAlertDismissedReasonEnum = "false positive"
CodeScanningAlertDismissedReasonEnumWonTFix CodeScanningAlertDismissedReasonEnum = "won't fix"
CodeScanningAlertDismissedReasonEnumUsedInTests CodeScanningAlertDismissedReasonEnum = "used in tests"
)


