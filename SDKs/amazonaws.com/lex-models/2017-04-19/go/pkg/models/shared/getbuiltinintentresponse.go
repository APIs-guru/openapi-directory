package shared

type GetBuiltinIntentResponse struct {
	Signature        *string             `json:"signature"`
	Slots            []BuiltinIntentSlot `json:"slots"`
	SupportedLocales []LocaleEnum        `json:"supportedLocales"`
}
