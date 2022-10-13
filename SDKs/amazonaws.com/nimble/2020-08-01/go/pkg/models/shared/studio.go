package shared

import (
	"time"
)

type Studio struct {
	AdminRoleArn                  *string                        `json:"adminRoleArn"`
	Arn                           *string                        `json:"arn"`
	CreatedAt                     *time.Time                     `json:"createdAt"`
	DisplayName                   *string                        `json:"displayName"`
	HomeRegion                    *string                        `json:"homeRegion"`
	SsoClientID                   *string                        `json:"ssoClientId"`
	State                         *StudioStateEnum               `json:"state"`
	StatusCode                    *StudioStatusCodeEnum          `json:"statusCode"`
	StatusMessage                 *string                        `json:"statusMessage"`
	StudioEncryptionConfiguration *StudioEncryptionConfiguration `json:"studioEncryptionConfiguration"`
	StudioID                      *string                        `json:"studioId"`
	StudioName                    *string                        `json:"studioName"`
	StudioURL                     *string                        `json:"studioUrl"`
	Tags                          map[string]string              `json:"tags"`
	UpdatedAt                     *time.Time                     `json:"updatedAt"`
	UserRoleArn                   *string                        `json:"userRoleArn"`
}
