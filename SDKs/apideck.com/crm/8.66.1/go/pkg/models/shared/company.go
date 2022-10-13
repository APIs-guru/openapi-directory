package shared

import (
	"time"
)

type CompanyRowTypeCompanyRowType struct {
	ID   *string `json:"id"`
	Name *string `json:"name"`
}

type Company struct {
	AbnBranch         *string                       `json:"abn_branch"`
	AbnOrTfn          *string                       `json:"abn_or_tfn"`
	Acn               *string                       `json:"acn"`
	Addresses         []Address                     `json:"addresses"`
	AnnualRevenue     *string                       `json:"annual_revenue"`
	BankAccounts      []BankAccount                 `json:"bank_accounts"`
	Birthday          *time.Time                    `json:"birthday"`
	CreatedAt         *time.Time                    `json:"created_at"`
	CreatedBy         *string                       `json:"created_by"`
	Currency          *CurrencyEnum                 `json:"currency"`
	CustomFields      []CustomField                 `json:"custom_fields"`
	Deleted           *bool                         `json:"deleted"`
	Description       *string                       `json:"description"`
	Emails            []Email                       `json:"emails"`
	Fax               *string                       `json:"fax"`
	FirstName         *string                       `json:"first_name"`
	ID                *string                       `json:"id"`
	Image             *string                       `json:"image"`
	Industry          *string                       `json:"industry"`
	InteractionCount  *int64                        `json:"interaction_count"`
	LastActivityAt    *time.Time                    `json:"last_activity_at"`
	LastName          *string                       `json:"last_name"`
	Name              string                        `json:"name"`
	NumberOfEmployees *string                       `json:"number_of_employees"`
	OwnerID           *string                       `json:"owner_id"`
	Ownership         *string                       `json:"ownership"`
	ParentID          *string                       `json:"parent_id"`
	PayeeNumber       *string                       `json:"payee_number"`
	PhoneNumbers      []PhoneNumber                 `json:"phone_numbers"`
	ReadOnly          *bool                         `json:"read_only"`
	RowType           *CompanyRowTypeCompanyRowType `json:"row_type"`
	SalesTaxNumber    *string                       `json:"sales_tax_number"`
	Salutation        *string                       `json:"salutation"`
	SocialLinks       []SocialLink                  `json:"social_links"`
	Status            *string                       `json:"status"`
	Tags              []string                      `json:"tags"`
	UpdatedAt         *time.Time                    `json:"updated_at"`
	UpdatedBy         *string                       `json:"updated_by"`
	VatNumber         *string                       `json:"vat_number"`
	Websites          []Website                     `json:"websites"`
}
