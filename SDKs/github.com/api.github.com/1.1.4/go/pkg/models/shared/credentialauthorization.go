package shared

import (
	"time"
)

type CredentialAuthorization struct {
	AuthorizedCredentialID    *int64     `json:"authorized_credential_id"`
	AuthorizedCredentialNote  *string    `json:"authorized_credential_note"`
	AuthorizedCredentialTitle *string    `json:"authorized_credential_title"`
	CredentialAccessedAt      *time.Time `json:"credential_accessed_at"`
	CredentialAuthorizedAt    time.Time  `json:"credential_authorized_at"`
	CredentialID              int64      `json:"credential_id"`
	CredentialType            string     `json:"credential_type"`
	Fingerprint               *string    `json:"fingerprint"`
	Login                     string     `json:"login"`
	Scopes                    []string   `json:"scopes"`
	TokenLastEight            *string    `json:"token_last_eight"`
}
