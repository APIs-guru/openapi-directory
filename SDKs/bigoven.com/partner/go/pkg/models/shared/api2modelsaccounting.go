package shared

import (
	"time"
)

type Api2ModelsAccounting struct {
	CreditBalance     *int32     `json:"CreditBalance" form:"name=CreditBalance"`
	MemberSince       *time.Time `json:"MemberSince" form:"name=MemberSince"`
	PremiumExpiryDate *time.Time `json:"PremiumExpiryDate" form:"name=PremiumExpiryDate"`
	UserLevel         *string    `json:"UserLevel" form:"name=UserLevel"`
}
