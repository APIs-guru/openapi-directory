package shared

type Warning struct {
	ErrorCode *string `json:"ErrorCode"`
	Pages     []int64 `json:"Pages"`
}
