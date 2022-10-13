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

type ActivityAttendee struct {
	ContactID    *string                     `json:"contact_id"`
	CreatedAt    *time.Time                  `json:"created_at"`
	EmailAddress *string                     `json:"email_address"`
	FirstName    *string                     `json:"first_name"`
	ID           *string                     `json:"id"`
	IsOrganizer  *bool                       `json:"is_organizer"`
	LastName     *string                     `json:"last_name"`
	MiddleName   *string                     `json:"middle_name"`
	Name         *string                     `json:"name"`
	Prefix       *string                     `json:"prefix"`
	Status       *ActivityAttendeeStatusEnum `json:"status"`
	Suffix       *string                     `json:"suffix"`
	UpdatedAt    *time.Time                  `json:"updated_at"`
	UserID       *string                     `json:"user_id"`
}
