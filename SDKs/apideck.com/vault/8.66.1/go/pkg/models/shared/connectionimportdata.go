package shared

import (
	"time"
)

type ConnectionImportDataCredentials struct {
	AccessToken  *string    `json:"access_token,omitempty"`
	ExpiresIn    *int64     `json:"expires_in,omitempty"`
	IssuedAt     *time.Time `json:"issued_at,omitempty"`
	RefreshToken string     `json:"refresh_token"`
}

type ConnectionImportData struct {
	Credentials *ConnectionImportDataCredentials `json:"credentials,omitempty"`
	Metadata    map[string]interface{}           `json:"metadata,omitempty"`
	Settings    map[string]interface{}           `json:"settings,omitempty"`
}
