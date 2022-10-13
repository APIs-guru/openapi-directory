package shared

import (
	"time"
)

type HrisCompanyStatusEnum string

const (
	HrisCompanyStatusEnumActive   HrisCompanyStatusEnum = "active"
	HrisCompanyStatusEnumInactive HrisCompanyStatusEnum = "inactive"
	HrisCompanyStatusEnumTrial    HrisCompanyStatusEnum = "trial"
	HrisCompanyStatusEnumOther    HrisCompanyStatusEnum = "other"
)

type HrisCompany struct {
	Addresses     []Address              `json:"addresses"`
	CompanyNumber *string                `json:"company_number"`
	CreatedAt     *time.Time             `json:"created_at"`
	CreatedBy     *string                `json:"created_by"`
	DebtorID      *string                `json:"debtor_id"`
	Deleted       *bool                  `json:"deleted"`
	DisplayName   *string                `json:"display_name"`
	Emails        []Email                `json:"emails"`
	ID            *string                `json:"id"`
	LegalName     string                 `json:"legal_name"`
	PhoneNumbers  []PhoneNumber          `json:"phone_numbers"`
	Status        *HrisCompanyStatusEnum `json:"status"`
	Subdomain     *string                `json:"subdomain"`
	UpdatedAt     *time.Time             `json:"updated_at"`
	UpdatedBy     *string                `json:"updated_by"`
	Websites      []Website              `json:"websites"`
}
