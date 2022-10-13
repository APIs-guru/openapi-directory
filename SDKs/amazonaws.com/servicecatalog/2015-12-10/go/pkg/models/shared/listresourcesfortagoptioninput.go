package shared

type ListResourcesForTagOptionInput struct {
	PageSize     *int64  `json:"PageSize"`
	PageToken    *string `json:"PageToken"`
	ResourceType *string `json:"ResourceType"`
	TagOptionID  string  `json:"TagOptionId"`
}
