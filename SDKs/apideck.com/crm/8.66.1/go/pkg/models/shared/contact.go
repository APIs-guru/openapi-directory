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
	Active         *bool              `json:"active"`
	Addresses      []Address          `json:"addresses"`
	Birthday       *string            `json:"birthday"`
	CompanyID      *string            `json:"company_id"`
	CompanyName    *string            `json:"company_name"`
	CreatedAt      *time.Time         `json:"created_at"`
	CurrentBalance *float64           `json:"current_balance"`
	CustomFields   []CustomField      `json:"custom_fields"`
	Department     *string            `json:"department"`
	Description    *string            `json:"description"`
	Emails         []Email            `json:"emails"`
	Fax            *string            `json:"fax"`
	FirstCallAt    *time.Time         `json:"first_call_at"`
	FirstEmailAt   *time.Time         `json:"first_email_at"`
	FirstName      *string            `json:"first_name"`
	Gender         *ContactGenderEnum `json:"gender"`
	ID             *string            `json:"id"`
	Image          *string            `json:"image"`
	Language       *string            `json:"language"`
	LastActivityAt *time.Time         `json:"last_activity_at"`
	LastName       *string            `json:"last_name"`
	LeadID         *string            `json:"lead_id"`
	LeadSource     *string            `json:"lead_source"`
	MiddleName     *string            `json:"middle_name"`
	Name           string             `json:"name"`
	OwnerID        *string            `json:"owner_id"`
	PhoneNumbers   []PhoneNumber      `json:"phone_numbers"`
	PhotoURL       *string            `json:"photo_url"`
	Prefix         *string            `json:"prefix"`
	SocialLinks    []SocialLink       `json:"social_links"`
	Status         *string            `json:"status"`
	Suffix         *string            `json:"suffix"`
	Tags           []string           `json:"tags"`
	Title          *string            `json:"title"`
	Type           *ContactTypeEnum   `json:"type"`
	UpdatedAt      *time.Time         `json:"updated_at"`
	Websites       []Website          `json:"websites"`
}
