package shared

type CodeScanningAlertClassificationEnum string

const (
	CodeScanningAlertClassificationEnumSource    CodeScanningAlertClassificationEnum = "source"
	CodeScanningAlertClassificationEnumGenerated CodeScanningAlertClassificationEnum = "generated"
	CodeScanningAlertClassificationEnumTest      CodeScanningAlertClassificationEnum = "test"
	CodeScanningAlertClassificationEnumLibrary   CodeScanningAlertClassificationEnum = "library"
)
