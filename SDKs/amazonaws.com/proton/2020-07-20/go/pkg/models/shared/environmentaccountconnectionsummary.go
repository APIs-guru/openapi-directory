package shared

import (
	"time"
)

// EnvironmentAccountConnectionSummary
// A summary of the environment account connection detail data.
type EnvironmentAccountConnectionSummary struct {
	Arn                  string                                 `json:"arn"`
	EnvironmentAccountID string                                 `json:"environmentAccountId"`
	EnvironmentName      string                                 `json:"environmentName"`
	ID                   string                                 `json:"id"`
	LastModifiedAt       time.Time                              `json:"lastModifiedAt"`
	ManagementAccountID  string                                 `json:"managementAccountId"`
	RequestedAt          time.Time                              `json:"requestedAt"`
	RoleArn              string                                 `json:"roleArn"`
	Status               EnvironmentAccountConnectionStatusEnum `json:"status"`
}
