package shared

type RemoveLfTagsFromResourceResponse struct {
	Failures []LfTagError `json:"Failures,omitempty"`
}
