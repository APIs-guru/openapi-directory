package shared

type BuiltinSlotTypeMetadata struct {
	Signature        *string      `json:"signature"`
	SupportedLocales []LocaleEnum `json:"supportedLocales"`
}
