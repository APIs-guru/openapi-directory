package shared

import (
	"time"
)

type DescribeUserProfileResponse struct {
	CreationTime               *time.Time             `json:"CreationTime,omitempty"`
	DomainID                   *string                `json:"DomainId,omitempty"`
	FailureReason              *string                `json:"FailureReason,omitempty"`
	HomeEfsFileSystemUID       *string                `json:"HomeEfsFileSystemUid,omitempty"`
	LastModifiedTime           *time.Time             `json:"LastModifiedTime,omitempty"`
	SingleSignOnUserIdentifier *string                `json:"SingleSignOnUserIdentifier,omitempty"`
	SingleSignOnUserValue      *string                `json:"SingleSignOnUserValue,omitempty"`
	Status                     *UserProfileStatusEnum `json:"Status,omitempty"`
	UserProfileArn             *string                `json:"UserProfileArn,omitempty"`
	UserProfileName            *string                `json:"UserProfileName,omitempty"`
	UserSettings               *UserSettings          `json:"UserSettings,omitempty"`
}
