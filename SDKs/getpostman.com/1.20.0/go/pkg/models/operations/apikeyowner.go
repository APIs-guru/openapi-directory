package operations



type APIKeyOwner200ApplicationJSONOperations struct {
    Limit *float64 `json:"limit,omitempty"`
    Name *string `json:"name,omitempty"`
    Overage *float64 `json:"overage,omitempty"`
    Usage *float64 `json:"usage,omitempty"`
    
}

type APIKeyOwner200ApplicationJSONUser struct {
    Avatar *string `json:"avatar,omitempty"`
    Email *string `json:"email,omitempty"`
    FullName *string `json:"fullName,omitempty"`
    ID *string `json:"id,omitempty"`
    IsPublic *bool `json:"isPublic,omitempty"`
    Username *string `json:"username,omitempty"`
    
}

type APIKeyOwner200ApplicationJSON struct {
    Operations []APIKeyOwner200ApplicationJSONOperations `json:"operations,omitempty"`
    User *APIKeyOwner200ApplicationJSONUser `json:"user,omitempty"`
    
}

type APIKeyOwnerResponse struct {
    ContentType string 
    StatusCode int64 
    APIKeyOwner200ApplicationJSONObject *APIKeyOwner200ApplicationJSON 
    
}

