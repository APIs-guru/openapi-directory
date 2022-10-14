package shared

type Warning struct {
	ErrorCode *string `json:"ErrorCode,omitempty"`
	Pages     []int64 `json:"Pages,omitempty"`
}
