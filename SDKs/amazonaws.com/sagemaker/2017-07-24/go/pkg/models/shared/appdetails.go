package shared

import (
	"time"
)

// AppDetails
// Details about an Amazon SageMaker app.
type AppDetails struct {
	AppName         *string        `json:"AppName,omitempty"`
	AppType         *AppTypeEnum   `json:"AppType,omitempty"`
	CreationTime    *time.Time     `json:"CreationTime,omitempty"`
	DomainID        *string        `json:"DomainId,omitempty"`
	Status          *AppStatusEnum `json:"Status,omitempty"`
	UserProfileName *string        `json:"UserProfileName,omitempty"`
}
