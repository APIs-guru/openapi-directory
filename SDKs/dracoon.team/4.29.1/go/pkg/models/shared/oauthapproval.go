package shared

import (
	"time"
)

// OAuthApproval
// OAuth client approval information
type OAuthApproval struct {
	ClientID   string     `json:"clientId"`
	ClientName string     `json:"clientName"`
	ExpiresAt  *time.Time `json:"expiresAt,omitempty"`
}
