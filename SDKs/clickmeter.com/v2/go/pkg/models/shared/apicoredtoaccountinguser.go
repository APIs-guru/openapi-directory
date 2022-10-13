package shared

type APICoreDtoAccountingUser struct {
	BoGoVal          *string `json:"boGoVal" form:"name=boGoVal"`
	BonusClicks      *int64  `json:"bonusClicks" form:"name=bonusClicks"`
	CompanyName      *string `json:"companyName" form:"name=companyName"`
	CompanyRole      *string `json:"companyRole" form:"name=companyRole"`
	Email            *string `json:"email" form:"name=email"`
	FirstName        *string `json:"firstName" form:"name=firstName"`
	LastName         *string `json:"lastName" form:"name=lastName"`
	Phone            *string `json:"phone" form:"name=phone"`
	RedirectOnly     *bool   `json:"redirectOnly" form:"name=redirectOnly"`
	RegistrationDate *string `json:"registrationDate" form:"name=registrationDate"`
	TimeframeMinDate *string `json:"timeframeMinDate" form:"name=timeframeMinDate"`
	Timezone         *int32  `json:"timezone" form:"name=timezone"`
	Timezonename     *string `json:"timezonename" form:"name=timezonename"`
}
