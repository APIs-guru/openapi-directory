package shared

type APIKeyInfo struct {
	CustomerEmail *string `json:"customer_email"`
	CustomerName  *string `json:"customer_name"`
	Expires       *string `json:"expires"`
	ItemID        *string `json:"item_id"`
	ItemName      *string `json:"item_name"`
	License       *string `json:"license"`
	LicenseLimit  *string `json:"license_limit"`
	PriceID       *string `json:"price_id"`
	Success       *string `json:"success"`
}
