package shared

import (
	"time"
)

type ClientDetailsAPIModel struct {
	AdditionalEmails          []AdditionalClientEmailAPIModel `json:"AdditionalEmails"`
	Address                   *string                         `json:"Address"`
	ClientCountryID           *int32                          `json:"ClientCountryId"`
	ClientCurrencyID          *int32                          `json:"ClientCurrencyId"`
	CompanyRegistrationNumber *string                         `json:"CompanyRegistrationNumber"`
	CreatedOn                 *time.Time                      `json:"CreatedOn"`
	DefaultDueDateInDays      *int32                          `json:"DefaultDueDateInDays"`
	Email                     *string                         `json:"Email"`
	ID                        *int32                          `json:"Id"`
	Name                      *string                         `json:"Name"`
	PhoneNumber               *string                         `json:"PhoneNumber"`
	UILanguageID              *int32                          `json:"UiLanguageId"`
	Vat                       *string                         `json:"Vat"`
}
