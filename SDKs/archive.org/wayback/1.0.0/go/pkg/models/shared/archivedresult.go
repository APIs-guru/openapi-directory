package shared

type ArchivedResult struct {
	Snapshot  Snapshot `json:"snapshot"`
	Tag       *string  `json:"tag,omitempty"`
	Timestamp string   `json:"timestamp"`
	URL       string   `json:"url"`
}
