package shared

import (
	"time"
)

// EnvironmentAccountConnection
// The environment account connection detail data.
type EnvironmentAccountConnection struct {
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
