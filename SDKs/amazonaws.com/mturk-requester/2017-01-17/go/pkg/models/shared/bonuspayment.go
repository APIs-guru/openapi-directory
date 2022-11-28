package shared

import (
	"time"
)

// BonusPayment
// An object representing a Bonus payment paid to a Worker.
type BonusPayment struct {
	AssignmentID *string    `json:"AssignmentId,omitempty"`
	BonusAmount  *string    `json:"BonusAmount,omitempty"`
	GrantTime    *time.Time `json:"GrantTime,omitempty"`
	Reason       *string    `json:"Reason,omitempty"`
	WorkerID     *string    `json:"WorkerId,omitempty"`
}
