package shared

import (
	"time"
)

type JobBranchBranch struct {
	ID   *string `json:"id"`
	Name *string `json:"name"`
}

type JobEmploymentTermsEnum string

const (
	JobEmploymentTermsEnumFullTime   JobEmploymentTermsEnum = "full-time"
	JobEmploymentTermsEnumPartTime   JobEmploymentTermsEnum = "part-time"
	JobEmploymentTermsEnumIntership  JobEmploymentTermsEnum = "intership"
	JobEmploymentTermsEnumContractor JobEmploymentTermsEnum = "contractor"
	JobEmploymentTermsEnumEmployee   JobEmploymentTermsEnum = "employee"
	JobEmploymentTermsEnumFreelance  JobEmploymentTermsEnum = "freelance"
	JobEmploymentTermsEnumTemp       JobEmploymentTermsEnum = "temp"
	JobEmploymentTermsEnumSeasonal   JobEmploymentTermsEnum = "seasonal"
	JobEmploymentTermsEnumVolunteer  JobEmploymentTermsEnum = "volunteer"
	JobEmploymentTermsEnumOther      JobEmploymentTermsEnum = "other"
)

type JobSalary struct {
	Currency *CurrencyEnum `json:"currency"`
	Max      *int64        `json:"max"`
	Min      *int64        `json:"min"`
}

type JobVisibilityEnum string

const (
	JobVisibilityEnumPublic   JobVisibilityEnum = "public"
	JobVisibilityEnumInternal JobVisibilityEnum = "internal"
)

type Job struct {
	Addresses            []Address               `json:"addresses"`
	AvailableToEmployees *bool                   `json:"available_to_employees"`
	Blocks               []interface{}           `json:"blocks"`
	Branch               *JobBranchBranch        `json:"branch"`
	Closing              *string                 `json:"closing"`
	ClosingDate          *time.Time              `json:"closing_date"`
	ClosingHTML          *string                 `json:"closing_html"`
	Code                 *string                 `json:"code"`
	Confidential         *bool                   `json:"confidential"`
	CreatedAt            *time.Time              `json:"created_at"`
	CreatedBy            *string                 `json:"created_by"`
	Deleted              *bool                   `json:"deleted"`
	Department           *Department             `json:"department"`
	Description          *string                 `json:"description"`
	DescriptionHTML      *string                 `json:"description_html"`
	EmploymentTerms      *JobEmploymentTermsEnum `json:"employment_terms"`
	Experience           *string                 `json:"experience"`
	Followers            []string                `json:"followers"`
	HiringManagers       []interface{}           `json:"hiring_managers"`
	ID                   *string                 `json:"id"`
	JobPortalURL         *string                 `json:"job_portal_url"`
	Language             *string                 `json:"language"`
	OwnerID              *string                 `json:"owner_id"`
	PublishedAt          *time.Time              `json:"published_at"`
	RecordURL            *string                 `json:"record_url"`
	Recruiters           []string                `json:"recruiters"`
	Remote               *bool                   `json:"remote"`
	RequisitionID        *string                 `json:"requisition_id"`
	Salary               *JobSalary              `json:"salary"`
	Sequence             *int64                  `json:"sequence"`
	Slug                 *string                 `json:"slug"`
	Status               *JobStatusEnum          `json:"status"`
	Tags                 []string                `json:"tags"`
	Title                *string                 `json:"title"`
	UpdatedAt            *time.Time              `json:"updated_at"`
	UpdatedBy            *string                 `json:"updated_by"`
	URL                  *string                 `json:"url"`
	Visibility           []JobVisibilityEnum     `json:"visibility"`
}
