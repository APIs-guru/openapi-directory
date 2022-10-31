package shared

import (
	"time"
)

type ContactGenderEnum string

const (
	ContactGenderEnumMale   ContactGenderEnum = "male"
	ContactGenderEnumFemale ContactGenderEnum = "female"
	ContactGenderEnumUnisex ContactGenderEnum = "unisex"
)

type ContactTypeEnum string

const (
	ContactTypeEnumCustomer ContactTypeEnum = "customer"
	ContactTypeEnumSupplier ContactTypeEnum = "supplier"
	ContactTypeEnumEmployee ContactTypeEnum = "employee"
	ContactTypeEnumPersonal ContactTypeEnum = "personal"
)

type Contact struct {
	Active         *bool              `json:"active,omitempty"`
	Addresses      []Address          `json:"addresses,omitempty"`
	Birthday       *string            `json:"birthday,omitempty"`
	CompanyID      *string            `json:"company_id,omitempty"`
	CompanyName    *string            `json:"company_name,omitempty"`
	CreatedAt      *time.Time         `json:"created_at,omitempty"`
	CurrentBalance *float64           `json:"current_balance,omitempty"`
	CustomFields   []CustomField      `json:"custom_fields,omitempty"`
	Department     *string            `json:"department,omitempty"`
	Description    *string            `json:"description,omitempty"`
	Emails         []Email            `json:"emails,omitempty"`
	Fax            *string            `json:"fax,omitempty"`
	FirstCallAt    *time.Time         `json:"first_call_at,omitempty"`
	FirstEmailAt   *time.Time         `json:"first_email_at,omitempty"`
	FirstName      *string            `json:"first_name,omitempty"`
	Gender         *ContactGenderEnum `json:"gender,omitempty"`
	ID             *string            `json:"id,omitempty"`
	Image          *string            `json:"image,omitempty"`
	Language       *string            `json:"language,omitempty"`
	LastActivityAt *time.Time         `json:"last_activity_at,omitempty"`
	LastName       *string            `json:"last_name,omitempty"`
	LeadID         *string            `json:"lead_id,omitempty"`
	LeadSource     *string            `json:"lead_source,omitempty"`
	MiddleName     *string            `json:"middle_name,omitempty"`
	Name           string             `json:"name"`
	OwnerID        *string            `json:"owner_id,omitempty"`
	PhoneNumbers   []PhoneNumber      `json:"phone_numbers,omitempty"`
	PhotoURL       *string            `json:"photo_url,omitempty"`
	Prefix         *string            `json:"prefix,omitempty"`
	SocialLinks    []SocialLink       `json:"social_links,omitempty"`
	Status         *string            `json:"status,omitempty"`
	Suffix         *string            `json:"suffix,omitempty"`
	Tags           []string           `json:"tags,omitempty"`
	Title          *string            `json:"title,omitempty"`
	Type           *ContactTypeEnum   `json:"type,omitempty"`
	UpdatedAt      *time.Time         `json:"updated_at,omitempty"`
	Websites       []Website          `json:"websites,omitempty"`
}
