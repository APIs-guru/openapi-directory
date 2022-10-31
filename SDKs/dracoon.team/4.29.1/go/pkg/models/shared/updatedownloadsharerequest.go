package shared



type UpdateDownloadShareRequest struct {
    DefaultCountry *string `json:"defaultCountry,omitempty"`
    Expiration *ObjectExpiration `json:"expiration,omitempty"`
    InternalNotes *string `json:"internalNotes,omitempty"`
    MaxDownloads *int32 `json:"maxDownloads,omitempty"`
    Name *string `json:"name,omitempty"`
    Notes *string `json:"notes,omitempty"`
    NotifyCreator *bool `json:"notifyCreator,omitempty"`
    Password *string `json:"password,omitempty"`
    ReceiverLanguage *string `json:"receiverLanguage,omitempty"`
    ResetMaxDownloads *bool `json:"resetMaxDownloads,omitempty"`
    ResetPassword *bool `json:"resetPassword,omitempty"`
    ShowCreatorName *bool `json:"showCreatorName,omitempty"`
    ShowCreatorUsername *bool `json:"showCreatorUsername,omitempty"`
    TextMessageRecipients []string `json:"textMessageRecipients,omitempty"`
    
}

