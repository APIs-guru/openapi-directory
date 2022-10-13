package shared

import (
	"time"
)

type AccountingCustomerStatusStatusEnum string

const (
	AccountingCustomerStatusStatusEnumActive             AccountingCustomerStatusStatusEnum = "active"
	AccountingCustomerStatusStatusEnumInactive           AccountingCustomerStatusStatusEnum = "inactive"
	AccountingCustomerStatusStatusEnumArchived           AccountingCustomerStatusStatusEnum = "archived"
	AccountingCustomerStatusStatusEnumGdprErasureRequest AccountingCustomerStatusStatusEnum = "gdpr-erasure-request"
	AccountingCustomerStatusStatusEnumUnknown            AccountingCustomerStatusStatusEnum = "unknown"
)

type AccountingCustomer struct {
	Addresses    []Address                           `json:"addresses"`
	BankAccounts []BankAccount                       `json:"bank_accounts"`
	CompanyName  *string                             `json:"company_name"`
	CreatedAt    *time.Time                          `json:"created_at"`
	CreatedBy    *string                             `json:"created_by"`
	Currency     *CurrencyEnum                       `json:"currency"`
	DisplayID    *string                             `json:"display_id"`
	DisplayName  *string                             `json:"display_name"`
	Emails       []Email                             `json:"emails"`
	FirstName    *string                             `json:"first_name"`
	ID           *string                             `json:"id"`
	Individual   *bool                               `json:"individual"`
	LastName     *string                             `json:"last_name"`
	MiddleName   *string                             `json:"middle_name"`
	Notes        *string                             `json:"notes"`
	PhoneNumbers []PhoneNumber                       `json:"phone_numbers"`
	RowVersion   *string                             `json:"row_version"`
	Status       *AccountingCustomerStatusStatusEnum `json:"status"`
	Suffix       *string                             `json:"suffix"`
	TaxNumber    *string                             `json:"tax_number"`
	TaxRate      *LinkedTaxRate                      `json:"tax_rate"`
	Title        *string                             `json:"title"`
	UpdatedAt    *time.Time                          `json:"updated_at"`
	UpdatedBy    *string                             `json:"updated_by"`
	Websites     []Website                           `json:"websites"`
}
