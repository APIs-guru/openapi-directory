package shared

type GetSnowballUsageResult struct {
	SnowballLimit  *int64 `json:"SnowballLimit"`
	SnowballsInUse *int64 `json:"SnowballsInUse"`
}
