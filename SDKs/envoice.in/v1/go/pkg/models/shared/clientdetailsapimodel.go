package shared

import (
	"time"
)

type ClientDetailsAPIModel struct {
	AdditionalEmails          []AdditionalClientEmailAPIModel `json:"AdditionalEmails,omitempty"`
	Address                   *string                         `json:"Address,omitempty"`
	ClientCountryID           *int32                          `json:"ClientCountryId,omitempty"`
	ClientCurrencyID          *int32                          `json:"ClientCurrencyId,omitempty"`
	CompanyRegistrationNumber *string                         `json:"CompanyRegistrationNumber,omitempty"`
	CreatedOn                 *time.Time                      `json:"CreatedOn,omitempty"`
	DefaultDueDateInDays      *int32                          `json:"DefaultDueDateInDays,omitempty"`
	Email                     *string                         `json:"Email,omitempty"`
	ID                        *int32                          `json:"Id,omitempty"`
	Name                      *string                         `json:"Name,omitempty"`
	PhoneNumber               *string                         `json:"PhoneNumber,omitempty"`
	UILanguageID              *int32                          `json:"UiLanguageId,omitempty"`
	Vat                       *string                         `json:"Vat,omitempty"`
}
