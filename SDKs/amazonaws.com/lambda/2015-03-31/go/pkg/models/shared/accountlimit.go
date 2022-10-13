package shared

type AccountLimit struct {
	CodeSizeUnzipped               *int64 `json:"CodeSizeUnzipped"`
	CodeSizeZipped                 *int64 `json:"CodeSizeZipped"`
	ConcurrentExecutions           *int64 `json:"ConcurrentExecutions"`
	TotalCodeSize                  *int64 `json:"TotalCodeSize"`
	UnreservedConcurrentExecutions *int64 `json:"UnreservedConcurrentExecutions"`
}
