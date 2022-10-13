package shared

type BuiltinIntentMetadata struct {
	Signature        *string      `json:"signature"`
	SupportedLocales []LocaleEnum `json:"supportedLocales"`
}
