package shared

type GetBuiltinIntentResponse struct {
	Signature        *string             `json:"signature,omitempty"`
	Slots            []BuiltinIntentSlot `json:"slots,omitempty"`
	SupportedLocales []LocaleEnum        `json:"supportedLocales,omitempty"`
}
