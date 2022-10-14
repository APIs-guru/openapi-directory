package shared

type Artifact struct {
	NodeIndex  *int64  `json:"node_index,omitempty"`
	Path       *string `json:"path,omitempty"`
	PrettyPath *string `json:"pretty_path,omitempty"`
	URL        *string `json:"url,omitempty"`
}
