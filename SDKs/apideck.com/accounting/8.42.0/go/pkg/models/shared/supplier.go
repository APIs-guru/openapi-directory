package shared

import (
	"time"
)

type SupplierStatusStatusEnum string

const (
	SupplierStatusStatusEnumActive             SupplierStatusStatusEnum = "active"
	SupplierStatusStatusEnumInactive           SupplierStatusStatusEnum = "inactive"
	SupplierStatusStatusEnumArchived           SupplierStatusStatusEnum = "archived"
	SupplierStatusStatusEnumGdprErasureRequest SupplierStatusStatusEnum = "gdpr-erasure-request"
	SupplierStatusStatusEnumUnknown            SupplierStatusStatusEnum = "unknown"
)

type Supplier struct {
	Account      *LinkedLedgerAccount      `json:"account"`
	Addresses    []Address                 `json:"addresses"`
	BankAccounts []BankAccount             `json:"bank_accounts"`
	CompanyName  *string                   `json:"company_name"`
	CreatedAt    *time.Time                `json:"created_at"`
	CreatedBy    *string                   `json:"created_by"`
	Currency     *CurrencyEnum             `json:"currency"`
	DisplayName  *string                   `json:"display_name"`
	DownstreamID *string                   `json:"downstream_id"`
	Emails       []Email                   `json:"emails"`
	FirstName    *string                   `json:"first_name"`
	ID           *string                   `json:"id"`
	LastName     *string                   `json:"last_name"`
	MiddleName   *string                   `json:"middle_name"`
	Notes        *string                   `json:"notes"`
	PhoneNumbers []PhoneNumber             `json:"phone_numbers"`
	RowVersion   *string                   `json:"row_version"`
	Status       *SupplierStatusStatusEnum `json:"status"`
	Suffix       *string                   `json:"suffix"`
	TaxNumber    *string                   `json:"tax_number"`
	TaxRate      *LinkedTaxRate            `json:"tax_rate"`
	Title        *string                   `json:"title"`
	UpdatedAt    *time.Time                `json:"updated_at"`
	UpdatedBy    *string                   `json:"updated_by"`
	Websites     []Website                 `json:"websites"`
}
