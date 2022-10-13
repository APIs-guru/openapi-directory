package shared

import (
	"time"
)

type LaunchProfile struct {
	Arn                           *string                      `json:"arn"`
	CreatedAt                     *time.Time                   `json:"createdAt"`
	CreatedBy                     *string                      `json:"createdBy"`
	Description                   *string                      `json:"description"`
	Ec2SubnetIds                  []string                     `json:"ec2SubnetIds"`
	LaunchProfileID               *string                      `json:"launchProfileId"`
	LaunchProfileProtocolVersions []string                     `json:"launchProfileProtocolVersions"`
	Name                          *string                      `json:"name"`
	State                         *LaunchProfileStateEnum      `json:"state"`
	StatusCode                    *LaunchProfileStatusCodeEnum `json:"statusCode"`
	StatusMessage                 *string                      `json:"statusMessage"`
	StreamConfiguration           *StreamConfiguration         `json:"streamConfiguration"`
	StudioComponentIds            []string                     `json:"studioComponentIds"`
	Tags                          map[string]string            `json:"tags"`
	UpdatedAt                     *time.Time                   `json:"updatedAt"`
	UpdatedBy                     *string                      `json:"updatedBy"`
}
