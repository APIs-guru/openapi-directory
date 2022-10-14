package shared

type ListTextTranslationJobsResponse struct {
	NextToken                        *string                        `json:"NextToken,omitempty"`
	TextTranslationJobPropertiesList []TextTranslationJobProperties `json:"TextTranslationJobPropertiesList,omitempty"`
}
