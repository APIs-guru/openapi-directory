package shared

type ArchivedResult struct {
	Snapshot  Snapshot `json:"snapshot"`
	Tag       *string  `json:"tag"`
	Timestamp string   `json:"timestamp"`
	URL       string   `json:"url"`
}
