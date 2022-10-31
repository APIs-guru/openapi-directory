package shared

type AntiSpam struct {
	AllowedTypes []AntiSpamTypesEnum `json:"allowed_types,omitempty"`
	Type         *AntiSpamTypesEnum  `json:"type,omitempty"`
}
