package shared

type GitTreeTree struct {
	Mode *string `json:"mode"`
	Path *string `json:"path"`
	Sha  *string `json:"sha"`
	Size *int64  `json:"size"`
	Type *string `json:"type"`
	URL  *string `json:"url"`
}

type GitTree struct {
	Sha       string        `json:"sha"`
	Tree      []GitTreeTree `json:"tree"`
	Truncated bool          `json:"truncated"`
	URL       string        `json:"url"`
}
