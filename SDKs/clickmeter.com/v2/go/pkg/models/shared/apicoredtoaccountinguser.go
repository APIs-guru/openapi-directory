package shared



type APICoreDtoAccountingUser struct {
    BoGoVal *string `json:"boGoVal,omitempty" form:"name=boGoVal"`
    BonusClicks *int64 `json:"bonusClicks,omitempty" form:"name=bonusClicks"`
    CompanyName *string `json:"companyName,omitempty" form:"name=companyName"`
    CompanyRole *string `json:"companyRole,omitempty" form:"name=companyRole"`
    Email *string `json:"email,omitempty" form:"name=email"`
    FirstName *string `json:"firstName,omitempty" form:"name=firstName"`
    LastName *string `json:"lastName,omitempty" form:"name=lastName"`
    Phone *string `json:"phone,omitempty" form:"name=phone"`
    RedirectOnly *bool `json:"redirectOnly,omitempty" form:"name=redirectOnly"`
    RegistrationDate *string `json:"registrationDate,omitempty" form:"name=registrationDate"`
    TimeframeMinDate *string `json:"timeframeMinDate,omitempty" form:"name=timeframeMinDate"`
    Timezone *int32 `json:"timezone,omitempty" form:"name=timezone"`
    Timezonename *string `json:"timezonename,omitempty" form:"name=timezonename"`
    
}

