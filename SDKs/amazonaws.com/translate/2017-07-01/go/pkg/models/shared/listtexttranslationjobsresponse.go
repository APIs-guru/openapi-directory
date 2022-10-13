package shared

type ListTextTranslationJobsResponse struct {
	NextToken                        *string                        `json:"NextToken"`
	TextTranslationJobPropertiesList []TextTranslationJobProperties `json:"TextTranslationJobPropertiesList"`
}
