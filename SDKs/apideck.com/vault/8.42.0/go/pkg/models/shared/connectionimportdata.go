package shared

import (
	"time"
)

type ConnectionImportDataCredentials struct {
	AccessToken  *string    `json:"access_token"`
	ExpiresIn    *int64     `json:"expires_in"`
	IssuedAt     *time.Time `json:"issued_at"`
	RefreshToken string     `json:"refresh_token"`
}

type ConnectionImportData struct {
	Credentials *ConnectionImportDataCredentials `json:"credentials"`
	Metadata    map[string]interface{}           `json:"metadata"`
	Settings    map[string]interface{}           `json:"settings"`
}
