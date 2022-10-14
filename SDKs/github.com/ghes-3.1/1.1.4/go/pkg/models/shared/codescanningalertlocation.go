package shared

type CodeScanningAlertLocation struct {
	EndColumn   *int64  `json:"end_column,omitempty"`
	EndLine     *int64  `json:"end_line,omitempty"`
	Path        *string `json:"path,omitempty"`
	StartColumn *int64  `json:"start_column,omitempty"`
	StartLine   *int64  `json:"start_line,omitempty"`
}
