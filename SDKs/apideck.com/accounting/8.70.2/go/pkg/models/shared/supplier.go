package shared

import (
	"time"
)

type SupplierStatusEnum string

const (
	SupplierStatusEnumActive             SupplierStatusEnum = "active"
	SupplierStatusEnumInactive           SupplierStatusEnum = "inactive"
	SupplierStatusEnumArchived           SupplierStatusEnum = "archived"
	SupplierStatusEnumGdprErasureRequest SupplierStatusEnum = "gdpr-erasure-request"
	SupplierStatusEnumUnknown            SupplierStatusEnum = "unknown"
)

type Supplier struct {
	Account      *LinkedLedgerAccount `json:"account,omitempty"`
	Addresses    []Address            `json:"addresses,omitempty"`
	BankAccounts []BankAccount        `json:"bank_accounts,omitempty"`
	CompanyName  *string              `json:"company_name,omitempty"`
	CreatedAt    *time.Time           `json:"created_at,omitempty"`
	CreatedBy    *string              `json:"created_by,omitempty"`
	Currency     *CurrencyEnum        `json:"currency,omitempty"`
	DisplayName  *string              `json:"display_name,omitempty"`
	DownstreamID *string              `json:"downstream_id,omitempty"`
	Emails       []Email              `json:"emails,omitempty"`
	FirstName    *string              `json:"first_name,omitempty"`
	ID           *string              `json:"id,omitempty"`
	LastName     *string              `json:"last_name,omitempty"`
	MiddleName   *string              `json:"middle_name,omitempty"`
	Notes        *string              `json:"notes,omitempty"`
	PhoneNumbers []PhoneNumber        `json:"phone_numbers,omitempty"`
	RowVersion   *string              `json:"row_version,omitempty"`
	Status       *SupplierStatusEnum  `json:"status,omitempty"`
	Suffix       *string              `json:"suffix,omitempty"`
	TaxNumber    *string              `json:"tax_number,omitempty"`
	TaxRate      *LinkedTaxRate       `json:"tax_rate,omitempty"`
	Title        *string              `json:"title,omitempty"`
	UpdatedAt    *time.Time           `json:"updated_at,omitempty"`
	UpdatedBy    *string              `json:"updated_by,omitempty"`
	Websites     []Website            `json:"websites,omitempty"`
}
