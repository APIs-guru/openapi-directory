package shared

type Client struct {
	Address                   *string `json:"Address,omitempty" form:"name=Address"`
	ClientCountryID           *int32  `json:"ClientCountryId,omitempty" form:"name=ClientCountryId"`
	ClientCurrencyID          *int32  `json:"ClientCurrencyId,omitempty" form:"name=ClientCurrencyId"`
	CompanyRegistrationNumber *string `json:"CompanyRegistrationNumber,omitempty" form:"name=CompanyRegistrationNumber"`
	DefaultDueDateInDays      *int32  `json:"DefaultDueDateInDays,omitempty" form:"name=DefaultDueDateInDays"`
	Email                     *string `json:"Email,omitempty" form:"name=Email"`
	ID                        *int32  `json:"Id,omitempty" form:"name=Id"`
	Name                      *string `json:"Name,omitempty" form:"name=Name"`
	PhoneNumber               *string `json:"PhoneNumber,omitempty" form:"name=PhoneNumber"`
	UILanguageID              *int32  `json:"UiLanguageId,omitempty" form:"name=UiLanguageId"`
	UserID                    *int32  `json:"UserId,omitempty" form:"name=UserId"`
	Vat                       *string `json:"Vat,omitempty" form:"name=Vat"`
}
