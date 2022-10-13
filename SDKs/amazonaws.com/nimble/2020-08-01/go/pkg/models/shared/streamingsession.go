package shared

import (
	"time"
)

type StreamingSession struct {
	Arn              *string                         `json:"arn"`
	CreatedAt        *time.Time                      `json:"createdAt"`
	CreatedBy        *string                         `json:"createdBy"`
	Ec2InstanceType  *string                         `json:"ec2InstanceType"`
	LaunchProfileID  *string                         `json:"launchProfileId"`
	OwnedBy          *string                         `json:"ownedBy"`
	SessionID        *string                         `json:"sessionId"`
	State            *StreamingSessionStateEnum      `json:"state"`
	StatusCode       *StreamingSessionStatusCodeEnum `json:"statusCode"`
	StatusMessage    *string                         `json:"statusMessage"`
	StreamingImageID *string                         `json:"streamingImageId"`
	Tags             map[string]string               `json:"tags"`
	TerminateAt      *time.Time                      `json:"terminateAt"`
	UpdatedAt        *time.Time                      `json:"updatedAt"`
	UpdatedBy        *string                         `json:"updatedBy"`
}
