package shared

type UpdatePhpMemoryLimitRequest struct {
	MemoryLimit *int32 `json:"memory_limit,omitempty"`
}
