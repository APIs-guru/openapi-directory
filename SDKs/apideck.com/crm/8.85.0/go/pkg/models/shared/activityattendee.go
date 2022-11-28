package shared

import (
	"time"
)

type ActivityAttendeeStatusEnum string

const (
	ActivityAttendeeStatusEnumAccepted  ActivityAttendeeStatusEnum = "accepted"
	ActivityAttendeeStatusEnumTentative ActivityAttendeeStatusEnum = "tentative"
	ActivityAttendeeStatusEnumDeclined  ActivityAttendeeStatusEnum = "declined"
)

type ActivityAttendeeInput struct {
	EmailAddress *string                     `json:"email_address,omitempty"`
	FirstName    *string                     `json:"first_name,omitempty"`
	IsOrganizer  *bool                       `json:"is_organizer,omitempty"`
	LastName     *string                     `json:"last_name,omitempty"`
	MiddleName   *string                     `json:"middle_name,omitempty"`
	Name         *string                     `json:"name,omitempty"`
	Prefix       *string                     `json:"prefix,omitempty"`
	Status       *ActivityAttendeeStatusEnum `json:"status,omitempty"`
	Suffix       *string                     `json:"suffix,omitempty"`
}

type ActivityAttendee struct {
	ContactID    *string                     `json:"contact_id,omitempty"`
	CreatedAt    *time.Time                  `json:"created_at,omitempty"`
	EmailAddress *string                     `json:"email_address,omitempty"`
	FirstName    *string                     `json:"first_name,omitempty"`
	ID           *string                     `json:"id,omitempty"`
	IsOrganizer  *bool                       `json:"is_organizer,omitempty"`
	LastName     *string                     `json:"last_name,omitempty"`
	MiddleName   *string                     `json:"middle_name,omitempty"`
	Name         *string                     `json:"name,omitempty"`
	Prefix       *string                     `json:"prefix,omitempty"`
	Status       *ActivityAttendeeStatusEnum `json:"status,omitempty"`
	Suffix       *string                     `json:"suffix,omitempty"`
	UpdatedAt    *time.Time                  `json:"updated_at,omitempty"`
	UserID       *string                     `json:"user_id,omitempty"`
}
