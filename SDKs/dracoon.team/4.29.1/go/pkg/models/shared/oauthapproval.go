package shared

import (
	"time"
)

type OAuthApproval struct {
	ClientID   string     `json:"clientId"`
	ClientName string     `json:"clientName"`
	ExpiresAt  *time.Time `json:"expiresAt"`
}
