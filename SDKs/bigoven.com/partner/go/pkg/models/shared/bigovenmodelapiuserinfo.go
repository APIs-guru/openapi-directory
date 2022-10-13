package shared

import (
	"time"
)

type BigOvenModelAPIUserInfo struct {
	FirstName         *string    `json:"FirstName"`
	ImageUrl48        *string    `json:"ImageUrl48"`
	IsKitchenHelper   *bool      `json:"IsKitchenHelper"`
	IsPremium         *bool      `json:"IsPremium"`
	IsUsingRecurly    *bool      `json:"IsUsingRecurly"`
	LastName          *string    `json:"LastName"`
	MemberSince       *time.Time `json:"MemberSince"`
	PhotoURL          *string    `json:"PhotoUrl"`
	PhotoUrl48        *string    `json:"PhotoUrl48"`
	PremiumExpiryDate *time.Time `json:"PremiumExpiryDate"`
	UserID            *int32     `json:"UserID"`
	UserName          *string    `json:"UserName"`
	WebURL            *string    `json:"WebUrl"`
}
