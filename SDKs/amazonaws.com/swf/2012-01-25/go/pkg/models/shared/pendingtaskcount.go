package shared

type PendingTaskCount struct {
	Count     int64 `json:"count"`
	Truncated *bool `json:"truncated"`
}
