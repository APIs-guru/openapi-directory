package shared

// UpdateTagsForDomainRequest
// The UpdateTagsForDomainRequest includes the following elements.
type UpdateTagsForDomainRequest struct {
	DomainName   string `json:"DomainName"`
	TagsToUpdate []Tag  `json:"TagsToUpdate,omitempty"`
}
