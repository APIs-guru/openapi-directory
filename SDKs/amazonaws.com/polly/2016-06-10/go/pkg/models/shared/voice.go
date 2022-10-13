package shared

type Voice struct {
	AdditionalLanguageCodes []LanguageCodeEnum `json:"AdditionalLanguageCodes"`
	Gender                  *GenderEnum        `json:"Gender"`
	ID                      *VoiceIDEnum       `json:"Id"`
	LanguageCode            *LanguageCodeEnum  `json:"LanguageCode"`
	LanguageName            *string            `json:"LanguageName"`
	Name                    *string            `json:"Name"`
	SupportedEngines        []EngineEnum       `json:"SupportedEngines"`
}
