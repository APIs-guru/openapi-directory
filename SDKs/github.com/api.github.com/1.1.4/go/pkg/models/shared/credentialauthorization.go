package shared

import (
	"time"
)

type CredentialAuthorization struct {
	AuthorizedCredentialID    *int64     `json:"authorized_credential_id,omitempty"`
	AuthorizedCredentialNote  *string    `json:"authorized_credential_note,omitempty"`
	AuthorizedCredentialTitle *string    `json:"authorized_credential_title,omitempty"`
	CredentialAccessedAt      *time.Time `json:"credential_accessed_at,omitempty"`
	CredentialAuthorizedAt    time.Time  `json:"credential_authorized_at"`
	CredentialID              int64      `json:"credential_id"`
	CredentialType            string     `json:"credential_type"`
	Fingerprint               *string    `json:"fingerprint,omitempty"`
	Login                     string     `json:"login"`
	Scopes                    []string   `json:"scopes,omitempty"`
	TokenLastEight            *string    `json:"token_last_eight,omitempty"`
}
