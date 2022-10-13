package shared

import (
	"time"
)

type GetParametersForImportResponse struct {
	ImportToken       *string    `json:"ImportToken"`
	KeyID             *string    `json:"KeyId"`
	ParametersValidTo *time.Time `json:"ParametersValidTo"`
	PublicKey         *string    `json:"PublicKey"`
}
