package shared

import (
	"time"
)

type BonusPayment struct {
	AssignmentID *string    `json:"AssignmentId,omitempty"`
	BonusAmount  *string    `json:"BonusAmount,omitempty"`
	GrantTime    *time.Time `json:"GrantTime,omitempty"`
	Reason       *string    `json:"Reason,omitempty"`
	WorkerID     *string    `json:"WorkerId,omitempty"`
}
