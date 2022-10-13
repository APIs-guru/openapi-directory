package shared

type Artifact struct {
	NodeIndex  *int64  `json:"node_index"`
	Path       *string `json:"path"`
	PrettyPath *string `json:"pretty_path"`
	URL        *string `json:"url"`
}
