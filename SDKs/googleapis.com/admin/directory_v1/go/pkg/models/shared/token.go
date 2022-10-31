package shared



type Token struct {
    Anonymous *bool `json:"anonymous,omitempty"`
    ClientID *string `json:"clientId,omitempty"`
    DisplayText *string `json:"displayText,omitempty"`
    Etag *string `json:"etag,omitempty"`
    Kind *string `json:"kind,omitempty"`
    NativeApp *bool `json:"nativeApp,omitempty"`
    Scopes []string `json:"scopes,omitempty"`
    UserKey *string `json:"userKey,omitempty"`
    
}

