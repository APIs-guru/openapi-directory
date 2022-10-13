package shared

type Client struct {
	Address                   *string `json:"Address" form:"name=Address"`
	ClientCountryID           *int32  `json:"ClientCountryId" form:"name=ClientCountryId"`
	ClientCurrencyID          *int32  `json:"ClientCurrencyId" form:"name=ClientCurrencyId"`
	CompanyRegistrationNumber *string `json:"CompanyRegistrationNumber" form:"name=CompanyRegistrationNumber"`
	DefaultDueDateInDays      *int32  `json:"DefaultDueDateInDays" form:"name=DefaultDueDateInDays"`
	Email                     *string `json:"Email" form:"name=Email"`
	ID                        *int32  `json:"Id" form:"name=Id"`
	Name                      *string `json:"Name" form:"name=Name"`
	PhoneNumber               *string `json:"PhoneNumber" form:"name=PhoneNumber"`
	UILanguageID              *int32  `json:"UiLanguageId" form:"name=UiLanguageId"`
	UserID                    *int32  `json:"UserId" form:"name=UserId"`
	Vat                       *string `json:"Vat" form:"name=Vat"`
}
