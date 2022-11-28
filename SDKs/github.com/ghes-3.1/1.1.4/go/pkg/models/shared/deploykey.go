package shared

// DeployKey
// An SSH key granting access to a single repository.
type DeployKey struct {
	CreatedAt string `json:"created_at"`
	ID        int64  `json:"id"`
	Key       string `json:"key"`
	ReadOnly  bool   `json:"read_only"`
	Title     string `json:"title"`
	URL       string `json:"url"`
	Verified  bool   `json:"verified"`
}
