package shared

import (
	"time"
)

// UserProfileDetails
// The user profile details.
type UserProfileDetails struct {
	CreationTime     *time.Time             `json:"CreationTime,omitempty"`
	DomainID         *string                `json:"DomainId,omitempty"`
	LastModifiedTime *time.Time             `json:"LastModifiedTime,omitempty"`
	Status           *UserProfileStatusEnum `json:"Status,omitempty"`
	UserProfileName  *string                `json:"UserProfileName,omitempty"`
}
