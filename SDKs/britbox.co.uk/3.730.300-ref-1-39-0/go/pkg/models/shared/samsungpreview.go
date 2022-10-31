package shared



type SamsungPreview struct {
    Expires *int64 `json:"expires,omitempty"`
    ExpiresOnly *bool `json:"expires_only,omitempty"`
    Sections []SamsungPreviewSection `json:"sections"`
    
}

