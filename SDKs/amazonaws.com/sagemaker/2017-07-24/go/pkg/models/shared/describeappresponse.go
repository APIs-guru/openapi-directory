package shared

import (
	"time"
)

type DescribeAppResponse struct {
	AppArn                    *string        `json:"AppArn"`
	AppName                   *string        `json:"AppName"`
	AppType                   *AppTypeEnum   `json:"AppType"`
	CreationTime              *time.Time     `json:"CreationTime"`
	DomainID                  *string        `json:"DomainId"`
	FailureReason             *string        `json:"FailureReason"`
	LastHealthCheckTimestamp  *time.Time     `json:"LastHealthCheckTimestamp"`
	LastUserActivityTimestamp *time.Time     `json:"LastUserActivityTimestamp"`
	ResourceSpec              *ResourceSpec  `json:"ResourceSpec"`
	Status                    *AppStatusEnum `json:"Status"`
	UserProfileName           *string        `json:"UserProfileName"`
}
