package shared

type AntiSpam struct {
	AllowedTypes []AntiSpamTypesEnum `json:"allowed_types"`
	Type         *AntiSpamTypesEnum  `json:"type"`
}
