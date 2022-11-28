package shared

import (
	"time"
)

type GpgKeyEmails struct {
	Email    *string `json:"email,omitempty"`
	Verified *bool   `json:"verified,omitempty"`
}

type GpgKeySubkeys struct {
	CanCertify        *bool         `json:"can_certify,omitempty"`
	CanEncryptComms   *bool         `json:"can_encrypt_comms,omitempty"`
	CanEncryptStorage *bool         `json:"can_encrypt_storage,omitempty"`
	CanSign           *bool         `json:"can_sign,omitempty"`
	CreatedAt         *string       `json:"created_at,omitempty"`
	Emails            []interface{} `json:"emails,omitempty"`
	ExpiresAt         *string       `json:"expires_at,omitempty"`
	ID                *int64        `json:"id,omitempty"`
	KeyID             *string       `json:"key_id,omitempty"`
	PrimaryKeyID      *int64        `json:"primary_key_id,omitempty"`
	PublicKey         *string       `json:"public_key,omitempty"`
	RawKey            *string       `json:"raw_key,omitempty"`
	Subkeys           []interface{} `json:"subkeys,omitempty"`
}

// GpgKey
// A unique encryption key
type GpgKey struct {
	CanCertify        bool            `json:"can_certify"`
	CanEncryptComms   bool            `json:"can_encrypt_comms"`
	CanEncryptStorage bool            `json:"can_encrypt_storage"`
	CanSign           bool            `json:"can_sign"`
	CreatedAt         time.Time       `json:"created_at"`
	Emails            []GpgKeyEmails  `json:"emails"`
	ExpiresAt         time.Time       `json:"expires_at"`
	ID                int64           `json:"id"`
	KeyID             string          `json:"key_id"`
	PrimaryKeyID      int64           `json:"primary_key_id"`
	PublicKey         string          `json:"public_key"`
	RawKey            string          `json:"raw_key"`
	Subkeys           []GpgKeySubkeys `json:"subkeys"`
}
