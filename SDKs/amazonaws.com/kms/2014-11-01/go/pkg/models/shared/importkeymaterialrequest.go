package shared

import (
	"time"
)

type ImportKeyMaterialRequest struct {
	EncryptedKeyMaterial string                   `json:"EncryptedKeyMaterial"`
	ExpirationModel      *ExpirationModelTypeEnum `json:"ExpirationModel"`
	ImportToken          string                   `json:"ImportToken"`
	KeyID                string                   `json:"KeyId"`
	ValidTo              *time.Time               `json:"ValidTo"`
}
