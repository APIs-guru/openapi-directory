package shared

type Voice struct {
	AdditionalLanguageCodes []LanguageCodeEnum `json:"AdditionalLanguageCodes,omitempty"`
	Gender                  *GenderEnum        `json:"Gender,omitempty"`
	ID                      *VoiceIDEnum       `json:"Id,omitempty"`
	LanguageCode            *LanguageCodeEnum  `json:"LanguageCode,omitempty"`
	LanguageName            *string            `json:"LanguageName,omitempty"`
	Name                    *string            `json:"Name,omitempty"`
	SupportedEngines        []EngineEnum       `json:"SupportedEngines,omitempty"`
}
