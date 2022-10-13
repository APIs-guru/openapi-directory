package shared

import (
	"time"
)

type DescribeUserProfileResponse struct {
	CreationTime               *time.Time             `json:"CreationTime"`
	DomainID                   *string                `json:"DomainId"`
	FailureReason              *string                `json:"FailureReason"`
	HomeEfsFileSystemUID       *string                `json:"HomeEfsFileSystemUid"`
	LastModifiedTime           *time.Time             `json:"LastModifiedTime"`
	SingleSignOnUserIdentifier *string                `json:"SingleSignOnUserIdentifier"`
	SingleSignOnUserValue      *string                `json:"SingleSignOnUserValue"`
	Status                     *UserProfileStatusEnum `json:"Status"`
	UserProfileArn             *string                `json:"UserProfileArn"`
	UserProfileName            *string                `json:"UserProfileName"`
	UserSettings               *UserSettings          `json:"UserSettings"`
}
