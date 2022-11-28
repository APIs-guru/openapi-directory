package shared

// BuiltinSlotTypeMetadata
// Provides information about a built in slot type.
type BuiltinSlotTypeMetadata struct {
	Signature        *string      `json:"signature,omitempty"`
	SupportedLocales []LocaleEnum `json:"supportedLocales,omitempty"`
}
