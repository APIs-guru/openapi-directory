package shared

// Warning
// A warning about an issue that occurred during asynchronous text analysis (<a>StartDocumentAnalysis</a>) or asynchronous document text detection (<a>StartDocumentTextDetection</a>).
type Warning struct {
	ErrorCode *string `json:"ErrorCode,omitempty"`
	Pages     []int64 `json:"Pages,omitempty"`
}
