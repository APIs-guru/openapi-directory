package shared

import (
	"time"
)

type GpgKeyEmails struct {
	Email    *string `json:"email"`
	Verified *bool   `json:"verified"`
}

type GpgKeySubkeys struct {
	CanCertify        *bool         `json:"can_certify"`
	CanEncryptComms   *bool         `json:"can_encrypt_comms"`
	CanEncryptStorage *bool         `json:"can_encrypt_storage"`
	CanSign           *bool         `json:"can_sign"`
	CreatedAt         *string       `json:"created_at"`
	Emails            []interface{} `json:"emails"`
	ExpiresAt         *string       `json:"expires_at"`
	ID                *int64        `json:"id"`
	KeyID             *string       `json:"key_id"`
	PrimaryKeyID      *int64        `json:"primary_key_id"`
	PublicKey         *string       `json:"public_key"`
	RawKey            *string       `json:"raw_key"`
	Subkeys           []interface{} `json:"subkeys"`
}

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
