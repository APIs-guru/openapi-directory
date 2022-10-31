package shared



type GoogleCloudApigeeV1DeveloperAppKey struct {
    APIProducts []interface{} `json:"apiProducts,omitempty"`
    Attributes []GoogleCloudApigeeV1Attribute `json:"attributes,omitempty"`
    ConsumerKey *string `json:"consumerKey,omitempty"`
    ConsumerSecret *string `json:"consumerSecret,omitempty"`
    ExpiresAt *string `json:"expiresAt,omitempty"`
    ExpiresInSeconds *string `json:"expiresInSeconds,omitempty"`
    IssuedAt *string `json:"issuedAt,omitempty"`
    Scopes []string `json:"scopes,omitempty"`
    Status *string `json:"status,omitempty"`
    
}

