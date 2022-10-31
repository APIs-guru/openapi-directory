package shared

import (
	"time"
)

type JobBranch struct {
	ID   *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
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
	Currency *CurrencyEnum `json:"currency,omitempty"`
	Max      *int64        `json:"max,omitempty"`
	Min      *int64        `json:"min,omitempty"`
}

type JobVisibilityEnum string

const (
	JobVisibilityEnumPublic   JobVisibilityEnum = "public"
	JobVisibilityEnumInternal JobVisibilityEnum = "internal"
)

type Job struct {
	Addresses            []Address               `json:"addresses,omitempty"`
	AvailableToEmployees *bool                   `json:"available_to_employees,omitempty"`
	Blocks               []interface{}           `json:"blocks,omitempty"`
	Branch               *JobBranch              `json:"branch,omitempty"`
	Closing              *string                 `json:"closing,omitempty"`
	ClosingDate          *time.Time              `json:"closing_date,omitempty"`
	ClosingHTML          *string                 `json:"closing_html,omitempty"`
	Code                 *string                 `json:"code,omitempty"`
	Confidential         *bool                   `json:"confidential,omitempty"`
	CreatedAt            *time.Time              `json:"created_at,omitempty"`
	CreatedBy            *string                 `json:"created_by,omitempty"`
	Deleted              *bool                   `json:"deleted,omitempty"`
	Department           *Department             `json:"department,omitempty"`
	Description          *string                 `json:"description,omitempty"`
	DescriptionHTML      *string                 `json:"description_html,omitempty"`
	EmploymentTerms      *JobEmploymentTermsEnum `json:"employment_terms,omitempty"`
	Experience           *string                 `json:"experience,omitempty"`
	Followers            []string                `json:"followers,omitempty"`
	HiringManagers       []interface{}           `json:"hiring_managers,omitempty"`
	ID                   *string                 `json:"id,omitempty"`
	JobPortalURL         *string                 `json:"job_portal_url,omitempty"`
	Language             *string                 `json:"language,omitempty"`
	OwnerID              *string                 `json:"owner_id,omitempty"`
	PublishedAt          *time.Time              `json:"published_at,omitempty"`
	RecordURL            *string                 `json:"record_url,omitempty"`
	Recruiters           []string                `json:"recruiters,omitempty"`
	Remote               *bool                   `json:"remote,omitempty"`
	RequisitionID        *string                 `json:"requisition_id,omitempty"`
	Salary               *JobSalary              `json:"salary,omitempty"`
	Sequence             *int64                  `json:"sequence,omitempty"`
	Slug                 *string                 `json:"slug,omitempty"`
	Status               *JobStatusEnum          `json:"status,omitempty"`
	Tags                 []string                `json:"tags,omitempty"`
	Title                *string                 `json:"title,omitempty"`
	UpdatedAt            *time.Time              `json:"updated_at,omitempty"`
	UpdatedBy            *string                 `json:"updated_by,omitempty"`
	URL                  *string                 `json:"url,omitempty"`
	Visibility           []JobVisibilityEnum     `json:"visibility,omitempty"`
}
