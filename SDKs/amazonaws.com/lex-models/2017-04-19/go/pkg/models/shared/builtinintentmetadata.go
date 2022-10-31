package shared



type BuiltinIntentMetadata struct {
    Signature *string `json:"signature,omitempty"`
    SupportedLocales []LocaleEnum `json:"supportedLocales,omitempty"`
    
}

