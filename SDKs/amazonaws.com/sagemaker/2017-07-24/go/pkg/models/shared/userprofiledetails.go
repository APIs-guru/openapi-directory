package shared

import (
	"time"
)

type UserProfileDetails struct {
	CreationTime     *time.Time             `json:"CreationTime"`
	DomainID         *string                `json:"DomainId"`
	LastModifiedTime *time.Time             `json:"LastModifiedTime"`
	Status           *UserProfileStatusEnum `json:"Status"`
	UserProfileName  *string                `json:"UserProfileName"`
}
