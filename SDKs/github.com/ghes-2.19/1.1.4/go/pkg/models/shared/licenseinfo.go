package shared



type LicenseInfo struct {
    DaysUntilExpiration *int64 `json:"days_until_expiration,omitempty"`
    ExpireAt *string `json:"expire_at,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Seats *interface{} `json:"seats,omitempty"`
    SeatsAvailable *interface{} `json:"seats_available,omitempty"`
    SeatsUsed *int64 `json:"seats_used,omitempty"`
    
}

