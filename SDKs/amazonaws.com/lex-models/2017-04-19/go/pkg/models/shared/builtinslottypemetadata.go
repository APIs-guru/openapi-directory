package shared



type BuiltinSlotTypeMetadata struct {
    Signature *string `json:"signature,omitempty"`
    SupportedLocales []LocaleEnum `json:"supportedLocales,omitempty"`
    
}

