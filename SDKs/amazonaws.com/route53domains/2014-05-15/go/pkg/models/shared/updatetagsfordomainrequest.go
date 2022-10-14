package shared

type UpdateTagsForDomainRequest struct {
	DomainName   string `json:"DomainName"`
	TagsToUpdate []Tag  `json:"TagsToUpdate,omitempty"`
}
