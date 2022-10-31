package shared

import (
"time")

type LaunchProfile struct {
    Arn *string `json:"arn,omitempty"`
    CreatedAt *time.Time `json:"createdAt,omitempty"`
    CreatedBy *string `json:"createdBy,omitempty"`
    Description *string `json:"description,omitempty"`
    Ec2SubnetIds []string `json:"ec2SubnetIds,omitempty"`
    LaunchProfileID *string `json:"launchProfileId,omitempty"`
    LaunchProfileProtocolVersions []string `json:"launchProfileProtocolVersions,omitempty"`
    Name *string `json:"name,omitempty"`
    State *LaunchProfileStateEnum `json:"state,omitempty"`
    StatusCode *LaunchProfileStatusCodeEnum `json:"statusCode,omitempty"`
    StatusMessage *string `json:"statusMessage,omitempty"`
    StreamConfiguration *StreamConfiguration `json:"streamConfiguration,omitempty"`
    StudioComponentIds []string `json:"studioComponentIds,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    UpdatedAt *time.Time `json:"updatedAt,omitempty"`
    UpdatedBy *string `json:"updatedBy,omitempty"`
    
}

