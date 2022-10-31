package shared

type AddTagsInput struct {
	ResourceID   string                   `json:"ResourceId"`
	ResourceType TaggableResourceTypeEnum `json:"ResourceType"`
	Tags         []Tag                    `json:"Tags"`
}
