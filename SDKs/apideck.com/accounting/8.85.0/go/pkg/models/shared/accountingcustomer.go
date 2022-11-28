package shared

import (
	"time"
)

type AccountingCustomerStatusEnum string

const (
	AccountingCustomerStatusEnumActive             AccountingCustomerStatusEnum = "active"
	AccountingCustomerStatusEnumInactive           AccountingCustomerStatusEnum = "inactive"
	AccountingCustomerStatusEnumArchived           AccountingCustomerStatusEnum = "archived"
	AccountingCustomerStatusEnumGdprErasureRequest AccountingCustomerStatusEnum = "gdpr-erasure-request"
	AccountingCustomerStatusEnumUnknown            AccountingCustomerStatusEnum = "unknown"
)

type AccountingCustomerInput struct {
	Addresses    []Address                     `json:"addresses,omitempty"`
	BankAccounts []BankAccount                 `json:"bank_accounts,omitempty"`
	CompanyName  *string                       `json:"company_name,omitempty"`
	Currency     *CurrencyEnum                 `json:"currency,omitempty"`
	DisplayID    *string                       `json:"display_id,omitempty"`
	DisplayName  *string                       `json:"display_name,omitempty"`
	Emails       []Email                       `json:"emails,omitempty"`
	FirstName    *string                       `json:"first_name,omitempty"`
	Individual   *bool                         `json:"individual,omitempty"`
	LastName     *string                       `json:"last_name,omitempty"`
	MiddleName   *string                       `json:"middle_name,omitempty"`
	Notes        *string                       `json:"notes,omitempty"`
	PhoneNumbers []PhoneNumber                 `json:"phone_numbers,omitempty"`
	RowVersion   *string                       `json:"row_version,omitempty"`
	Status       *AccountingCustomerStatusEnum `json:"status,omitempty"`
	Suffix       *string                       `json:"suffix,omitempty"`
	TaxNumber    *string                       `json:"tax_number,omitempty"`
	TaxRate      *LinkedTaxRateInput           `json:"tax_rate,omitempty"`
	Title        *string                       `json:"title,omitempty"`
	Websites     []Website                     `json:"websites,omitempty"`
}

type AccountingCustomer struct {
	Addresses    []Address                     `json:"addresses,omitempty"`
	BankAccounts []BankAccount                 `json:"bank_accounts,omitempty"`
	CompanyName  *string                       `json:"company_name,omitempty"`
	CreatedAt    *time.Time                    `json:"created_at,omitempty"`
	CreatedBy    *string                       `json:"created_by,omitempty"`
	Currency     *CurrencyEnum                 `json:"currency,omitempty"`
	DisplayID    *string                       `json:"display_id,omitempty"`
	DisplayName  *string                       `json:"display_name,omitempty"`
	Emails       []Email                       `json:"emails,omitempty"`
	FirstName    *string                       `json:"first_name,omitempty"`
	ID           *string                       `json:"id,omitempty"`
	Individual   *bool                         `json:"individual,omitempty"`
	LastName     *string                       `json:"last_name,omitempty"`
	MiddleName   *string                       `json:"middle_name,omitempty"`
	Notes        *string                       `json:"notes,omitempty"`
	PhoneNumbers []PhoneNumber                 `json:"phone_numbers,omitempty"`
	RowVersion   *string                       `json:"row_version,omitempty"`
	Status       *AccountingCustomerStatusEnum `json:"status,omitempty"`
	Suffix       *string                       `json:"suffix,omitempty"`
	TaxNumber    *string                       `json:"tax_number,omitempty"`
	TaxRate      *LinkedTaxRate                `json:"tax_rate,omitempty"`
	Title        *string                       `json:"title,omitempty"`
	UpdatedAt    *time.Time                    `json:"updated_at,omitempty"`
	UpdatedBy    *string                       `json:"updated_by,omitempty"`
	Websites     []Website                     `json:"websites,omitempty"`
}
