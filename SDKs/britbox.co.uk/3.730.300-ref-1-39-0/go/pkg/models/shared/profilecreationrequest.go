package shared



type ProfileCreationRequest struct {
    LanguageCode *string `json:"languageCode,omitempty"`
    Name string `json:"name"`
    PinEnabled *bool `json:"pinEnabled,omitempty"`
    PurchaseEnabled *bool `json:"purchaseEnabled,omitempty"`
    Segments []string `json:"segments,omitempty"`
    
}

