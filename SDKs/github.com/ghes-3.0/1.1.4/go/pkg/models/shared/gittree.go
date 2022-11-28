package shared

type GitTreeTree struct {
	Mode *string `json:"mode,omitempty"`
	Path *string `json:"path,omitempty"`
	Sha  *string `json:"sha,omitempty"`
	Size *int64  `json:"size,omitempty"`
	Type *string `json:"type,omitempty"`
	URL  *string `json:"url,omitempty"`
}

// GitTree
// The hierarchy between files in a Git repository.
type GitTree struct {
	Sha       string        `json:"sha"`
	Tree      []GitTreeTree `json:"tree"`
	Truncated bool          `json:"truncated"`
	URL       string        `json:"url"`
}
