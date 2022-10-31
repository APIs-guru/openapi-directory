package shared

import (
"time")


type HrisCompanyStatusEnum string

const (
    HrisCompanyStatusEnumActive HrisCompanyStatusEnum = "active"
HrisCompanyStatusEnumInactive HrisCompanyStatusEnum = "inactive"
HrisCompanyStatusEnumTrial HrisCompanyStatusEnum = "trial"
HrisCompanyStatusEnumOther HrisCompanyStatusEnum = "other"
)


type HrisCompany struct {
    Addresses []Address `json:"addresses,omitempty"`
    CompanyNumber *string `json:"company_number,omitempty"`
    CreatedAt *time.Time `json:"created_at,omitempty"`
    CreatedBy *string `json:"created_by,omitempty"`
    DebtorID *string `json:"debtor_id,omitempty"`
    Deleted *bool `json:"deleted,omitempty"`
    DisplayName *string `json:"display_name,omitempty"`
    Emails []Email `json:"emails,omitempty"`
    ID *string `json:"id,omitempty"`
    LegalName string `json:"legal_name"`
    PhoneNumbers []PhoneNumber `json:"phone_numbers,omitempty"`
    Status *HrisCompanyStatusEnum `json:"status,omitempty"`
    Subdomain *string `json:"subdomain,omitempty"`
    UpdatedAt *time.Time `json:"updated_at,omitempty"`
    UpdatedBy *string `json:"updated_by,omitempty"`
    Websites []Website `json:"websites,omitempty"`
    
}

