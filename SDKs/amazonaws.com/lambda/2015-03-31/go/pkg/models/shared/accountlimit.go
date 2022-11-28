package shared

// AccountLimit
// Limits that are related to concurrency and storage. All file and storage sizes are in bytes.
type AccountLimit struct {
	CodeSizeUnzipped               *int64 `json:"CodeSizeUnzipped,omitempty"`
	CodeSizeZipped                 *int64 `json:"CodeSizeZipped,omitempty"`
	ConcurrentExecutions           *int64 `json:"ConcurrentExecutions,omitempty"`
	TotalCodeSize                  *int64 `json:"TotalCodeSize,omitempty"`
	UnreservedConcurrentExecutions *int64 `json:"UnreservedConcurrentExecutions,omitempty"`
}
