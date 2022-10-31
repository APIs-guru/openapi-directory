package shared

import (
"time")


type EmployeeCompensationsFlsaStatusEnum string

const (
    EmployeeCompensationsFlsaStatusEnumExempt EmployeeCompensationsFlsaStatusEnum = "exempt"
EmployeeCompensationsFlsaStatusEnumSalariedNonexempt EmployeeCompensationsFlsaStatusEnum = "salaried-nonexempt"
EmployeeCompensationsFlsaStatusEnumNonexempt EmployeeCompensationsFlsaStatusEnum = "nonexempt"
EmployeeCompensationsFlsaStatusEnumOwner EmployeeCompensationsFlsaStatusEnum = "owner"
)


type EmployeeCompensations struct {
    Currency *CurrencyEnum `json:"currency,omitempty"`
    EffectiveDate *string `json:"effective_date,omitempty"`
    FlsaStatus *EmployeeCompensationsFlsaStatusEnum `json:"flsa_status,omitempty"`
    ID *string `json:"id,omitempty"`
    JobID *string `json:"job_id,omitempty"`
    PaymentUnit *PaymentUnitEnum `json:"payment_unit,omitempty"`
    Rate *float64 `json:"rate,omitempty"`
    
}


type EmployeeEmploymentRoleSubTypeEnum string

const (
    EmployeeEmploymentRoleSubTypeEnumFullTime EmployeeEmploymentRoleSubTypeEnum = "full_time"
EmployeeEmploymentRoleSubTypeEnumPartTime EmployeeEmploymentRoleSubTypeEnum = "part_time"
EmployeeEmploymentRoleSubTypeEnumHourly EmployeeEmploymentRoleSubTypeEnum = "hourly"
)



type EmployeeEmploymentRoleTypeEnum string

const (
    EmployeeEmploymentRoleTypeEnumContractor EmployeeEmploymentRoleTypeEnum = "contractor"
EmployeeEmploymentRoleTypeEnumEmployee EmployeeEmploymentRoleTypeEnum = "employee"
EmployeeEmploymentRoleTypeEnumFreelance EmployeeEmploymentRoleTypeEnum = "freelance"
EmployeeEmploymentRoleTypeEnumTemp EmployeeEmploymentRoleTypeEnum = "temp"
EmployeeEmploymentRoleTypeEnumIntership EmployeeEmploymentRoleTypeEnum = "intership"
EmployeeEmploymentRoleTypeEnumOther EmployeeEmploymentRoleTypeEnum = "other"
)


type EmployeeEmploymentRole struct {
    SubType *EmployeeEmploymentRoleSubTypeEnum `json:"sub_type,omitempty"`
    Type *EmployeeEmploymentRoleTypeEnum `json:"type,omitempty"`
    
}


type EmployeeEmploymentStatusEnum string

const (
    EmployeeEmploymentStatusEnumActive EmployeeEmploymentStatusEnum = "active"
EmployeeEmploymentStatusEnumInactive EmployeeEmploymentStatusEnum = "inactive"
EmployeeEmploymentStatusEnumTerminated EmployeeEmploymentStatusEnum = "terminated"
EmployeeEmploymentStatusEnumOther EmployeeEmploymentStatusEnum = "other"
)


type EmployeeJobs struct {
    CompensationRate *float64 `json:"compensation_rate,omitempty"`
    Currency *CurrencyEnum `json:"currency,omitempty"`
    EmployeeID *string `json:"employee_id,omitempty"`
    EndDate *time.Time `json:"end_date,omitempty"`
    HiredAt *time.Time `json:"hired_at,omitempty"`
    ID *string `json:"id,omitempty"`
    IsPrimary *bool `json:"is_primary,omitempty"`
    Location *Address `json:"location,omitempty"`
    PaymentUnit *PaymentUnitEnum `json:"payment_unit,omitempty"`
    Role *string `json:"role,omitempty"`
    StartDate *time.Time `json:"start_date,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

type EmployeeManager struct {
    Email *string `json:"email,omitempty"`
    FirstName *string `json:"first_name,omitempty"`
    ID *string `json:"id,omitempty"`
    LastName *string `json:"last_name,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

type EmployeePartner struct {
    Birthday *time.Time `json:"birthday,omitempty"`
    DeceasedOn *time.Time `json:"deceased_on,omitempty"`
    FirstName *string `json:"first_name,omitempty"`
    Gender *GenderEnum `json:"gender,omitempty"`
    ID *string `json:"id,omitempty"`
    Initials *string `json:"initials,omitempty"`
    LastName *string `json:"last_name,omitempty"`
    MiddleName *string `json:"middle_name,omitempty"`
    
}

type EmployeeSocialLinks struct {
    ID *string `json:"id,omitempty"`
    Type *string `json:"type,omitempty"`
    URL string `json:"url"`
    
}

type EmployeeTeam struct {
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

type Employee struct {
    Addresses []Address `json:"addresses,omitempty"`
    Birthday *time.Time `json:"birthday,omitempty"`
    CompanyID *string `json:"company_id,omitempty"`
    CompanyName *string `json:"company_name,omitempty"`
    Compensations []EmployeeCompensations `json:"compensations,omitempty"`
    CountryOfBirth *string `json:"country_of_birth,omitempty"`
    CreatedAt *time.Time `json:"created_at,omitempty"`
    CreatedBy *string `json:"created_by,omitempty"`
    CustomFields []CustomField `json:"custom_fields,omitempty"`
    DeceasedOn *time.Time `json:"deceased_on,omitempty"`
    Deleted *bool `json:"deleted,omitempty"`
    Department *string `json:"department,omitempty"`
    DepartmentID *string `json:"department_id,omitempty"`
    Description *string `json:"description,omitempty"`
    DietaryPreference *string `json:"dietary_preference,omitempty"`
    DirectReports []string `json:"direct_reports,omitempty"`
    DisplayName *string `json:"display_name,omitempty"`
    Division *string `json:"division,omitempty"`
    Emails []Email `json:"emails,omitempty"`
    EmployeeNumber *string `json:"employee_number,omitempty"`
    EmploymentEndDate *string `json:"employment_end_date,omitempty"`
    EmploymentRole *EmployeeEmploymentRole `json:"employment_role,omitempty"`
    EmploymentStartDate *string `json:"employment_start_date,omitempty"`
    EmploymentStatus *EmployeeEmploymentStatusEnum `json:"employment_status,omitempty"`
    FirstName *string `json:"first_name,omitempty"`
    FoodAllergies []string `json:"food_allergies,omitempty"`
    Gender *GenderEnum `json:"gender,omitempty"`
    ID string `json:"id"`
    Initials *string `json:"initials,omitempty"`
    Jobs []EmployeeJobs `json:"jobs,omitempty"`
    Languages []string `json:"languages,omitempty"`
    LastName *string `json:"last_name,omitempty"`
    Manager *EmployeeManager `json:"manager,omitempty"`
    MaritalStatus *string `json:"marital_status,omitempty"`
    MiddleName *string `json:"middle_name,omitempty"`
    Nationalities []string `json:"nationalities,omitempty"`
    Partner *EmployeePartner `json:"partner,omitempty"`
    PhoneNumbers []PhoneNumber `json:"phone_numbers,omitempty"`
    PhotoURL *string `json:"photo_url,omitempty"`
    PreferredLanguage *string `json:"preferred_language,omitempty"`
    PreferredName *string `json:"preferred_name,omitempty"`
    Pronouns *string `json:"pronouns,omitempty"`
    RecordURL *string `json:"record_url,omitempty"`
    RowVersion *string `json:"row_version,omitempty"`
    Salutation *string `json:"salutation,omitempty"`
    SocialLinks []EmployeeSocialLinks `json:"social_links,omitempty"`
    SocialSecurityNumber *string `json:"social_security_number,omitempty"`
    Source *string `json:"source,omitempty"`
    SourceID *string `json:"source_id,omitempty"`
    Tags []string `json:"tags,omitempty"`
    TaxCode *string `json:"tax_code,omitempty"`
    TaxID *string `json:"tax_id,omitempty"`
    Team *EmployeeTeam `json:"team,omitempty"`
    Timezone *string `json:"timezone,omitempty"`
    Title *string `json:"title,omitempty"`
    UpdatedAt *time.Time `json:"updated_at,omitempty"`
    UpdatedBy *string `json:"updated_by,omitempty"`
    WorksRemote *bool `json:"works_remote,omitempty"`
    
}

