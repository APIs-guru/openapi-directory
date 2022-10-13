package shared

import (
	"time"
)

type EmployeeCompensationsFlsaStatusEnum string

const (
	EmployeeCompensationsFlsaStatusEnumExempt            EmployeeCompensationsFlsaStatusEnum = "exempt"
	EmployeeCompensationsFlsaStatusEnumSalariedNonexempt EmployeeCompensationsFlsaStatusEnum = "salaried-nonexempt"
	EmployeeCompensationsFlsaStatusEnumNonexempt         EmployeeCompensationsFlsaStatusEnum = "nonexempt"
	EmployeeCompensationsFlsaStatusEnumOwner             EmployeeCompensationsFlsaStatusEnum = "owner"
)

type EmployeeCompensations struct {
	Currency      *CurrencyEnum                        `json:"currency"`
	EffectiveDate *string                              `json:"effective_date"`
	FlsaStatus    *EmployeeCompensationsFlsaStatusEnum `json:"flsa_status"`
	ID            *string                              `json:"id"`
	JobID         *string                              `json:"job_id"`
	PaymentUnit   *PaymentUnitEnum                     `json:"payment_unit"`
	Rate          *float64                             `json:"rate"`
}

type EmployeeEmploymentRoleSubTypeEnum string

const (
	EmployeeEmploymentRoleSubTypeEnumFullTime EmployeeEmploymentRoleSubTypeEnum = "full_time"
	EmployeeEmploymentRoleSubTypeEnumPartTime EmployeeEmploymentRoleSubTypeEnum = "part_time"
	EmployeeEmploymentRoleSubTypeEnumHourly   EmployeeEmploymentRoleSubTypeEnum = "hourly"
)

type EmployeeEmploymentRoleTypeEnum string

const (
	EmployeeEmploymentRoleTypeEnumContractor EmployeeEmploymentRoleTypeEnum = "contractor"
	EmployeeEmploymentRoleTypeEnumEmployee   EmployeeEmploymentRoleTypeEnum = "employee"
	EmployeeEmploymentRoleTypeEnumFreelance  EmployeeEmploymentRoleTypeEnum = "freelance"
	EmployeeEmploymentRoleTypeEnumTemp       EmployeeEmploymentRoleTypeEnum = "temp"
	EmployeeEmploymentRoleTypeEnumIntership  EmployeeEmploymentRoleTypeEnum = "intership"
	EmployeeEmploymentRoleTypeEnumOther      EmployeeEmploymentRoleTypeEnum = "other"
)

type EmployeeEmploymentRole struct {
	SubType *EmployeeEmploymentRoleSubTypeEnum `json:"sub_type"`
	Type    *EmployeeEmploymentRoleTypeEnum    `json:"type"`
}

type EmployeeEmploymentStatusEnum string

const (
	EmployeeEmploymentStatusEnumActive     EmployeeEmploymentStatusEnum = "active"
	EmployeeEmploymentStatusEnumInactive   EmployeeEmploymentStatusEnum = "inactive"
	EmployeeEmploymentStatusEnumTerminated EmployeeEmploymentStatusEnum = "terminated"
	EmployeeEmploymentStatusEnumOther      EmployeeEmploymentStatusEnum = "other"
)

type EmployeeJobs struct {
	CompensationRate *float64         `json:"compensation_rate"`
	Currency         *CurrencyEnum    `json:"currency"`
	EmployeeID       *string          `json:"employee_id"`
	EndDate          *time.Time       `json:"end_date"`
	HiredAt          *time.Time       `json:"hired_at"`
	ID               *string          `json:"id"`
	IsPrimary        *bool            `json:"is_primary"`
	Location         *Address         `json:"location"`
	PaymentUnit      *PaymentUnitEnum `json:"payment_unit"`
	Role             *string          `json:"role"`
	StartDate        *time.Time       `json:"start_date"`
	Title            *string          `json:"title"`
}

type EmployeeManager struct {
	Email     *string `json:"email"`
	FirstName *string `json:"first_name"`
	ID        *string `json:"id"`
	LastName  *string `json:"last_name"`
	Name      *string `json:"name"`
}

type EmployeePartner struct {
	Birthday   *time.Time  `json:"birthday"`
	DeceasedOn *time.Time  `json:"deceased_on"`
	FirstName  *string     `json:"first_name"`
	Gender     *GenderEnum `json:"gender"`
	ID         *string     `json:"id"`
	Initials   *string     `json:"initials"`
	LastName   *string     `json:"last_name"`
	MiddleName *string     `json:"middle_name"`
}

type EmployeeSocialLinks struct {
	ID   *string `json:"id"`
	Type *string `json:"type"`
	URL  string  `json:"url"`
}

type EmployeeTeam struct {
	ID   *string `json:"id"`
	Name *string `json:"name"`
}

type Employee struct {
	Addresses            []Address                     `json:"addresses"`
	Birthday             *time.Time                    `json:"birthday"`
	CompanyID            *string                       `json:"company_id"`
	CompanyName          *string                       `json:"company_name"`
	Compensations        []EmployeeCompensations       `json:"compensations"`
	CountryOfBirth       *string                       `json:"country_of_birth"`
	CreatedAt            *time.Time                    `json:"created_at"`
	CreatedBy            *string                       `json:"created_by"`
	CustomFields         []CustomField                 `json:"custom_fields"`
	DeceasedOn           *time.Time                    `json:"deceased_on"`
	Deleted              *bool                         `json:"deleted"`
	Department           *string                       `json:"department"`
	Description          *string                       `json:"description"`
	DietaryPreference    *string                       `json:"dietary_preference"`
	DirectReports        []string                      `json:"direct_reports"`
	DisplayName          *string                       `json:"display_name"`
	Division             *string                       `json:"division"`
	Emails               []Email                       `json:"emails"`
	EmployeeNumber       *string                       `json:"employee_number"`
	EmploymentEndDate    *string                       `json:"employment_end_date"`
	EmploymentRole       *EmployeeEmploymentRole       `json:"employment_role"`
	EmploymentStartDate  *string                       `json:"employment_start_date"`
	EmploymentStatus     *EmployeeEmploymentStatusEnum `json:"employment_status"`
	FirstName            *string                       `json:"first_name"`
	FoodAllergies        []string                      `json:"food_allergies"`
	Gender               *GenderEnum                   `json:"gender"`
	ID                   *string                       `json:"id"`
	Initials             *string                       `json:"initials"`
	Jobs                 []EmployeeJobs                `json:"jobs"`
	Languages            []string                      `json:"languages"`
	LastName             *string                       `json:"last_name"`
	Manager              *EmployeeManager              `json:"manager"`
	MaritalStatus        *string                       `json:"marital_status"`
	MiddleName           *string                       `json:"middle_name"`
	Nationalities        []string                      `json:"nationalities"`
	Partner              *EmployeePartner              `json:"partner"`
	PhoneNumbers         []PhoneNumber                 `json:"phone_numbers"`
	PhotoURL             *string                       `json:"photo_url"`
	PreferredLanguage    *string                       `json:"preferred_language"`
	PreferredName        *string                       `json:"preferred_name"`
	Pronouns             *string                       `json:"pronouns"`
	RowVersion           *string                       `json:"row_version"`
	Salutation           *string                       `json:"salutation"`
	SocialLinks          []EmployeeSocialLinks         `json:"social_links"`
	SocialSecurityNumber *string                       `json:"social_security_number"`
	Source               *string                       `json:"source"`
	SourceID             *string                       `json:"source_id"`
	TaxCode              *string                       `json:"tax_code"`
	TaxID                *string                       `json:"tax_id"`
	Team                 *EmployeeTeam                 `json:"team"`
	Timezone             *string                       `json:"timezone"`
	Title                *string                       `json:"title"`
	UpdatedAt            *time.Time                    `json:"updated_at"`
	UpdatedBy            *string                       `json:"updated_by"`
	WorksRemote          *bool                         `json:"works_remote"`
}
