package shared

type DeleteTagsForDomainRequest struct {
	DomainName   string   `json:"DomainName"`
	TagsToDelete []string `json:"TagsToDelete"`
}
