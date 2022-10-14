package shared

type CreateLanguageModelResponse struct {
	BaseModelName   *BaseModelNameEnum   `json:"BaseModelName,omitempty"`
	InputDataConfig *InputDataConfig     `json:"InputDataConfig,omitempty"`
	LanguageCode    *ClmLanguageCodeEnum `json:"LanguageCode,omitempty"`
	ModelName       *string              `json:"ModelName,omitempty"`
	ModelStatus     *ModelStatusEnum     `json:"ModelStatus,omitempty"`
}
