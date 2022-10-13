package shared

import (
	"time"
)

type BonusPayment struct {
	AssignmentID *string    `json:"AssignmentId"`
	BonusAmount  *string    `json:"BonusAmount"`
	GrantTime    *time.Time `json:"GrantTime"`
	Reason       *string    `json:"Reason"`
	WorkerID     *string    `json:"WorkerId"`
}
