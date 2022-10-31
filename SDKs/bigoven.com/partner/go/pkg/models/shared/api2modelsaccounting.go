package shared

import (
"time")

type Api2ModelsAccounting struct {
    CreditBalance *int32 `json:"CreditBalance,omitempty" form:"name=CreditBalance"`
    MemberSince *time.Time `json:"MemberSince,omitempty" form:"name=MemberSince"`
    PremiumExpiryDate *time.Time `json:"PremiumExpiryDate,omitempty" form:"name=PremiumExpiryDate"`
    UserLevel *string `json:"UserLevel,omitempty" form:"name=UserLevel"`
    
}

