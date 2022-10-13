package shared

type DeleteTagsInput struct {
	ResourceID   string                   `json:"ResourceId"`
	ResourceType TaggableResourceTypeEnum `json:"ResourceType"`
	TagKeys      []string                 `json:"TagKeys"`
}
