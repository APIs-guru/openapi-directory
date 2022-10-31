package shared

import (
	"time"
)

type GetParametersForImportResponse struct {
	ImportToken       *string    `json:"ImportToken,omitempty"`
	KeyID             *string    `json:"KeyId,omitempty"`
	ParametersValidTo *time.Time `json:"ParametersValidTo,omitempty"`
	PublicKey         *string    `json:"PublicKey,omitempty"`
}
