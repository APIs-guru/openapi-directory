package shared

type Snapshot struct {
	Status    *int64  `json:"status"`
	Timestamp *string `json:"timestamp"`
	URL       *string `json:"url"`
}
