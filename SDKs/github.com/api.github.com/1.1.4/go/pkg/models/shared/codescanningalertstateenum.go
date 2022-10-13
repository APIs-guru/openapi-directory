package shared

type CodeScanningAlertStateEnum string

const (
	CodeScanningAlertStateEnumOpen      CodeScanningAlertStateEnum = "open"
	CodeScanningAlertStateEnumClosed    CodeScanningAlertStateEnum = "closed"
	CodeScanningAlertStateEnumDismissed CodeScanningAlertStateEnum = "dismissed"
	CodeScanningAlertStateEnumFixed     CodeScanningAlertStateEnum = "fixed"
)
