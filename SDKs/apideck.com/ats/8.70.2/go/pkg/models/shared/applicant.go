package shared

import (
	"time"
)

type ApplicantSocialLinks struct {
	ID   *string `json:"id,omitempty"`
	Type *string `json:"type,omitempty"`
	URL  string  `json:"url"`
}

type ApplicantWebsitesTypeEnum string

const (
	ApplicantWebsitesTypeEnumPrimary   ApplicantWebsitesTypeEnum = "primary"
	ApplicantWebsitesTypeEnumSecondary ApplicantWebsitesTypeEnum = "secondary"
	ApplicantWebsitesTypeEnumWork      ApplicantWebsitesTypeEnum = "work"
	ApplicantWebsitesTypeEnumPersonal  ApplicantWebsitesTypeEnum = "personal"
	ApplicantWebsitesTypeEnumOther     ApplicantWebsitesTypeEnum = "other"
)

type ApplicantWebsites struct {
	ID   *string                    `json:"id,omitempty"`
	Type *ApplicantWebsitesTypeEnum `json:"type,omitempty"`
	URL  string                     `json:"url"`
}

type Applicant struct {
	Addresses         []Address              `json:"addresses,omitempty"`
	Anonymized        *bool                  `json:"anonymized,omitempty"`
	Applications      []string               `json:"applications,omitempty"`
	Archived          *bool                  `json:"archived,omitempty"`
	Birthday          *time.Time             `json:"birthday,omitempty"`
	Confidential      *bool                  `json:"confidential,omitempty"`
	CoordinatorID     *string                `json:"coordinator_id,omitempty"`
	CoverLetter       *string                `json:"cover_letter,omitempty"`
	CreatedAt         *time.Time             `json:"created_at,omitempty"`
	CvURL             *string                `json:"cv_url,omitempty"`
	Deleted           *bool                  `json:"deleted,omitempty"`
	DeletedAt         *time.Time             `json:"deleted_at,omitempty"`
	DeletedBy         *string                `json:"deleted_by,omitempty"`
	Emails            []Email                `json:"emails,omitempty"`
	FirstName         *string                `json:"first_name,omitempty"`
	Followers         []string               `json:"followers,omitempty"`
	Headline          *string                `json:"headline,omitempty"`
	ID                *string                `json:"id,omitempty"`
	Initials          *string                `json:"initials,omitempty"`
	JobURL            *string                `json:"job_url,omitempty"`
	LastInteractionAt *time.Time             `json:"last_interaction_at,omitempty"`
	LastName          *string                `json:"last_name,omitempty"`
	MiddleName        *string                `json:"middle_name,omitempty"`
	Name              *string                `json:"name,omitempty"`
	OwnerID           *string                `json:"owner_id,omitempty"`
	PhoneNumbers      []PhoneNumber          `json:"phone_numbers,omitempty"`
	PhotoURL          *string                `json:"photo_url,omitempty"`
	PositionID        *string                `json:"position_id,omitempty"`
	RecordURL         *string                `json:"record_url,omitempty"`
	RecruiterID       *string                `json:"recruiter_id,omitempty"`
	RejectedAt        *time.Time             `json:"rejected_at,omitempty"`
	SocialLinks       []ApplicantSocialLinks `json:"social_links,omitempty"`
	SourceID          *string                `json:"source_id,omitempty"`
	SourcedBy         *string                `json:"sourced_by,omitempty"`
	Sources           []string               `json:"sources,omitempty"`
	StageID           *string                `json:"stage_id,omitempty"`
	Tags              []string               `json:"tags,omitempty"`
	Title             *string                `json:"title,omitempty"`
	UpdatedAt         *time.Time             `json:"updated_at,omitempty"`
	Websites          []ApplicantWebsites    `json:"websites,omitempty"`
}
