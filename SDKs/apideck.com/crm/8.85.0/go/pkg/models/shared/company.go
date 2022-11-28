package shared

import (
	"time"
)

type CompanyCompanyRowType struct {
	ID   *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

type Company struct {
	AbnBranch         *string                `json:"abn_branch,omitempty"`
	AbnOrTfn          *string                `json:"abn_or_tfn,omitempty"`
	Acn               *string                `json:"acn,omitempty"`
	Addresses         []Address              `json:"addresses,omitempty"`
	AnnualRevenue     *string                `json:"annual_revenue,omitempty"`
	BankAccounts      []BankAccount          `json:"bank_accounts,omitempty"`
	Birthday          *time.Time             `json:"birthday,omitempty"`
	CreatedAt         *time.Time             `json:"created_at,omitempty"`
	CreatedBy         *string                `json:"created_by,omitempty"`
	Currency          *CurrencyEnum          `json:"currency,omitempty"`
	CustomFields      []CustomField          `json:"custom_fields,omitempty"`
	Deleted           *bool                  `json:"deleted,omitempty"`
	Description       *string                `json:"description,omitempty"`
	Emails            []Email                `json:"emails,omitempty"`
	Fax               *string                `json:"fax,omitempty"`
	FirstName         *string                `json:"first_name,omitempty"`
	ID                *string                `json:"id,omitempty"`
	Image             *string                `json:"image,omitempty"`
	Industry          *string                `json:"industry,omitempty"`
	InteractionCount  *int64                 `json:"interaction_count,omitempty"`
	LastActivityAt    *time.Time             `json:"last_activity_at,omitempty"`
	LastName          *string                `json:"last_name,omitempty"`
	Name              string                 `json:"name"`
	NumberOfEmployees *string                `json:"number_of_employees,omitempty"`
	OwnerID           *string                `json:"owner_id,omitempty"`
	Ownership         *string                `json:"ownership,omitempty"`
	ParentID          *string                `json:"parent_id,omitempty"`
	PayeeNumber       *string                `json:"payee_number,omitempty"`
	PhoneNumbers      []PhoneNumber          `json:"phone_numbers,omitempty"`
	ReadOnly          *bool                  `json:"read_only,omitempty"`
	RowType           *CompanyCompanyRowType `json:"row_type,omitempty"`
	SalesTaxNumber    *string                `json:"sales_tax_number,omitempty"`
	Salutation        *string                `json:"salutation,omitempty"`
	SocialLinks       []SocialLink           `json:"social_links,omitempty"`
	Status            *string                `json:"status,omitempty"`
	Tags              []string               `json:"tags,omitempty"`
	UpdatedAt         *time.Time             `json:"updated_at,omitempty"`
	UpdatedBy         *string                `json:"updated_by,omitempty"`
	VatNumber         *string                `json:"vat_number,omitempty"`
	Websites          []Website              `json:"websites,omitempty"`
}

type CompanyInput struct {
	AbnBranch         *string                `json:"abn_branch,omitempty"`
	AbnOrTfn          *string                `json:"abn_or_tfn,omitempty"`
	Acn               *string                `json:"acn,omitempty"`
	Addresses         []Address              `json:"addresses,omitempty"`
	AnnualRevenue     *string                `json:"annual_revenue,omitempty"`
	BankAccounts      []BankAccount          `json:"bank_accounts,omitempty"`
	Birthday          *time.Time             `json:"birthday,omitempty"`
	Currency          *CurrencyEnum          `json:"currency,omitempty"`
	CustomFields      []CustomField          `json:"custom_fields,omitempty"`
	Description       *string                `json:"description,omitempty"`
	Emails            []Email                `json:"emails,omitempty"`
	Fax               *string                `json:"fax,omitempty"`
	FirstName         *string                `json:"first_name,omitempty"`
	Image             *string                `json:"image,omitempty"`
	Industry          *string                `json:"industry,omitempty"`
	LastName          *string                `json:"last_name,omitempty"`
	Name              string                 `json:"name"`
	NumberOfEmployees *string                `json:"number_of_employees,omitempty"`
	OwnerID           *string                `json:"owner_id,omitempty"`
	Ownership         *string                `json:"ownership,omitempty"`
	PayeeNumber       *string                `json:"payee_number,omitempty"`
	PhoneNumbers      []PhoneNumber          `json:"phone_numbers,omitempty"`
	ReadOnly          *bool                  `json:"read_only,omitempty"`
	RowType           *CompanyCompanyRowType `json:"row_type,omitempty"`
	SalesTaxNumber    *string                `json:"sales_tax_number,omitempty"`
	Salutation        *string                `json:"salutation,omitempty"`
	SocialLinks       []SocialLink           `json:"social_links,omitempty"`
	Status            *string                `json:"status,omitempty"`
	Tags              []string               `json:"tags,omitempty"`
	VatNumber         *string                `json:"vat_number,omitempty"`
	Websites          []Website              `json:"websites,omitempty"`
}
