package shared

import (
	"time"
)

type CustomerSupportCustomerStatusStatusEnum string

const (
	CustomerSupportCustomerStatusStatusEnumActive             CustomerSupportCustomerStatusStatusEnum = "active"
	CustomerSupportCustomerStatusStatusEnumArchived           CustomerSupportCustomerStatusStatusEnum = "archived"
	CustomerSupportCustomerStatusStatusEnumGdprErasureRequest CustomerSupportCustomerStatusStatusEnum = "gdpr-erasure-request"
	CustomerSupportCustomerStatusStatusEnumUnknown            CustomerSupportCustomerStatusStatusEnum = "unknown"
)

type CustomerSupportCustomer struct {
	Addresses    []Address                                `json:"addresses"`
	BankAccounts *BankAccount                             `json:"bank_accounts"`
	CompanyName  *string                                  `json:"company_name"`
	CreatedAt    *time.Time                               `json:"created_at"`
	CreatedBy    *string                                  `json:"created_by"`
	Currency     *CurrencyEnum                            `json:"currency"`
	Emails       []Email                                  `json:"emails"`
	FirstName    *string                                  `json:"first_name"`
	ID           *string                                  `json:"id"`
	Individual   *bool                                    `json:"individual"`
	LastName     *string                                  `json:"last_name"`
	Notes        *string                                  `json:"notes"`
	PhoneNumbers []PhoneNumber                            `json:"phone_numbers"`
	Status       *CustomerSupportCustomerStatusStatusEnum `json:"status"`
	TaxNumber    *string                                  `json:"tax_number"`
	UpdatedAt    *time.Time                               `json:"updated_at"`
	UpdatedBy    *string                                  `json:"updated_by"`
}
