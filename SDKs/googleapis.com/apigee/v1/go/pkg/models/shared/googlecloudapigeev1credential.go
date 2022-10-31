package shared



type GoogleCloudApigeeV1Credential struct {
    APIProducts []GoogleCloudApigeeV1APIProductRef `json:"apiProducts,omitempty"`
    Attributes []GoogleCloudApigeeV1Attribute `json:"attributes,omitempty"`
    ConsumerKey *string `json:"consumerKey,omitempty"`
    ConsumerSecret *string `json:"consumerSecret,omitempty"`
    ExpiresAt *string `json:"expiresAt,omitempty"`
    IssuedAt *string `json:"issuedAt,omitempty"`
    Scopes []string `json:"scopes,omitempty"`
    Status *string `json:"status,omitempty"`
    
}

