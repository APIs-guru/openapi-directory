package shared

// DeleteTagsForDomainRequest
// The DeleteTagsForDomainRequest includes the following elements.
type DeleteTagsForDomainRequest struct {
	DomainName   string   `json:"DomainName"`
	TagsToDelete []string `json:"TagsToDelete"`
}
