package shared



type ApnsChannelResponse struct {
    ApplicationID *string `json:"ApplicationId,omitempty"`
    CreationDate *string `json:"CreationDate,omitempty"`
    DefaultAuthenticationMethod *string `json:"DefaultAuthenticationMethod,omitempty"`
    Enabled *bool `json:"Enabled,omitempty"`
    HasCredential *bool `json:"HasCredential,omitempty"`
    HasTokenKey *bool `json:"HasTokenKey,omitempty"`
    ID *string `json:"Id,omitempty"`
    IsArchived *bool `json:"IsArchived,omitempty"`
    LastModifiedBy *string `json:"LastModifiedBy,omitempty"`
    LastModifiedDate *string `json:"LastModifiedDate,omitempty"`
    Platform string `json:"Platform"`
    Version *int64 `json:"Version,omitempty"`
    
}

