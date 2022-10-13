package shared

type CreateLanguageModelResponse struct {
	BaseModelName   *BaseModelNameEnum   `json:"BaseModelName"`
	InputDataConfig *InputDataConfig     `json:"InputDataConfig"`
	LanguageCode    *ClmLanguageCodeEnum `json:"LanguageCode"`
	ModelName       *string              `json:"ModelName"`
	ModelStatus     *ModelStatusEnum     `json:"ModelStatus"`
}
