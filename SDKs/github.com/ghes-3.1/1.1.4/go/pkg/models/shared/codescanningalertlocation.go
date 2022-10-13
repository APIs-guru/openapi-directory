package shared

type CodeScanningAlertLocation struct {
	EndColumn   *int64  `json:"end_column"`
	EndLine     *int64  `json:"end_line"`
	Path        *string `json:"path"`
	StartColumn *int64  `json:"start_column"`
	StartLine   *int64  `json:"start_line"`
}
