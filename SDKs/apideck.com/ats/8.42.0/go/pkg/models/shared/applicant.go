package shared

import (
	"time"
)

type ApplicantSocialLinks struct {
	ID   *string `json:"id"`
	Type *string `json:"type"`
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
	ID   *string                    `json:"id"`
	Type *ApplicantWebsitesTypeEnum `json:"type"`
	URL  string                     `json:"url"`
}

type Applicant struct {
	Addresses         []Address              `json:"addresses"`
	Anonymized        *bool                  `json:"anonymized"`
	Applications      []string               `json:"applications"`
	Archived          *bool                  `json:"archived"`
	Birthday          *time.Time             `json:"birthday"`
	Confidential      *bool                  `json:"confidential"`
	CoordinatorID     *string                `json:"coordinator_id"`
	CoverLetter       *string                `json:"cover_letter"`
	CreatedAt         *time.Time             `json:"created_at"`
	CvURL             *string                `json:"cv_url"`
	Deleted           *bool                  `json:"deleted"`
	DeletedAt         *time.Time             `json:"deleted_at"`
	DeletedBy         *string                `json:"deleted_by"`
	Emails            []Email                `json:"emails"`
	FirstName         *string                `json:"first_name"`
	Followers         []string               `json:"followers"`
	Headline          *string                `json:"headline"`
	ID                *string                `json:"id"`
	Initials          *string                `json:"initials"`
	JobURL            *string                `json:"job_url"`
	LastInteractionAt *time.Time             `json:"last_interaction_at"`
	LastName          *string                `json:"last_name"`
	MiddleName        *string                `json:"middle_name"`
	Name              *string                `json:"name"`
	OwnerID           *string                `json:"owner_id"`
	PhoneNumbers      []PhoneNumber          `json:"phone_numbers"`
	PhotoURL          *string                `json:"photo_url"`
	PositionID        *string                `json:"position_id"`
	RecordURL         *string                `json:"record_url"`
	RecruiterID       *string                `json:"recruiter_id"`
	RejectedAt        *time.Time             `json:"rejected_at"`
	SocialLinks       []ApplicantSocialLinks `json:"social_links"`
	SourceID          *string                `json:"source_id"`
	SourcedBy         *string                `json:"sourced_by"`
	Sources           []string               `json:"sources"`
	StageID           *string                `json:"stage_id"`
	Tags              []string               `json:"tags"`
	Title             *string                `json:"title"`
	UpdatedAt         *time.Time             `json:"updated_at"`
	Websites          []ApplicantWebsites    `json:"websites"`
}
