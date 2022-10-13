package shared

import (
	"time"
)

type AppDetails struct {
	AppName         *string        `json:"AppName"`
	AppType         *AppTypeEnum   `json:"AppType"`
	CreationTime    *time.Time     `json:"CreationTime"`
	DomainID        *string        `json:"DomainId"`
	Status          *AppStatusEnum `json:"Status"`
	UserProfileName *string        `json:"UserProfileName"`
}
