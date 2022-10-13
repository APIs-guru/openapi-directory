package shared

type LicenseInfo struct {
	DaysUntilExpiration *int64       `json:"days_until_expiration"`
	ExpireAt            *string      `json:"expire_at"`
	Kind                *string      `json:"kind"`
	Seats               *interface{} `json:"seats"`
	SeatsAvailable      *interface{} `json:"seats_available"`
	SeatsUsed           *int64       `json:"seats_used"`
}
