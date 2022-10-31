package shared



type APIKeyInfo struct {
    CustomerEmail *string `json:"customer_email,omitempty"`
    CustomerName *string `json:"customer_name,omitempty"`
    Expires *string `json:"expires,omitempty"`
    ItemID *string `json:"item_id,omitempty"`
    ItemName *string `json:"item_name,omitempty"`
    License *string `json:"license,omitempty"`
    LicenseLimit *string `json:"license_limit,omitempty"`
    PriceID *string `json:"price_id,omitempty"`
    Success *string `json:"success,omitempty"`
    
}

