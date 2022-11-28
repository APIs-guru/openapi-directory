package shared

import (
	"time"
)

// As2KeyEntity
// List As2 Keys
type As2KeyEntity struct {
	As2PartnershipName *string    `json:"as2_partnership_name,omitempty"`
	CreatedAt          *time.Time `json:"created_at,omitempty"`
	Fingerprint        *string    `json:"fingerprint,omitempty"`
	ID                 *int32     `json:"id,omitempty"`
}
