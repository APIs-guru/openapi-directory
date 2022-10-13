package shared

import (
	"time"
)

type As2KeyEntity struct {
	As2PartnershipName *string    `json:"as2_partnership_name"`
	CreatedAt          *time.Time `json:"created_at"`
	Fingerprint        *string    `json:"fingerprint"`
	ID                 *int32     `json:"id"`
}
