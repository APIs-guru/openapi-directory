package shared

import (
	"time"
)

type BigOvenModelAPIUserInfoInput struct {
	FirstName         *string    `json:"FirstName,omitempty"`
	ImageUrl48        *string    `json:"ImageUrl48,omitempty"`
	IsKitchenHelper   *bool      `json:"IsKitchenHelper,omitempty"`
	IsPremium         *bool      `json:"IsPremium,omitempty"`
	IsUsingRecurly    *bool      `json:"IsUsingRecurly,omitempty"`
	LastName          *string    `json:"LastName,omitempty"`
	MemberSince       *time.Time `json:"MemberSince,omitempty"`
	PhotoURL          *string    `json:"PhotoUrl,omitempty"`
	PremiumExpiryDate *time.Time `json:"PremiumExpiryDate,omitempty"`
	UserID            *int32     `json:"UserID,omitempty"`
	UserName          *string    `json:"UserName,omitempty"`
}

type BigOvenModelAPIUserInfo struct {
	FirstName         *string    `json:"FirstName,omitempty"`
	ImageUrl48        *string    `json:"ImageUrl48,omitempty"`
	IsKitchenHelper   *bool      `json:"IsKitchenHelper,omitempty"`
	IsPremium         *bool      `json:"IsPremium,omitempty"`
	IsUsingRecurly    *bool      `json:"IsUsingRecurly,omitempty"`
	LastName          *string    `json:"LastName,omitempty"`
	MemberSince       *time.Time `json:"MemberSince,omitempty"`
	PhotoURL          *string    `json:"PhotoUrl,omitempty"`
	PhotoUrl48        *string    `json:"PhotoUrl48,omitempty"`
	PremiumExpiryDate *time.Time `json:"PremiumExpiryDate,omitempty"`
	UserID            *int32     `json:"UserID,omitempty"`
	UserName          *string    `json:"UserName,omitempty"`
	WebURL            *string    `json:"WebUrl,omitempty"`
}
