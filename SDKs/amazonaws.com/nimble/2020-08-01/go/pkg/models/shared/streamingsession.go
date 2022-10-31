package shared

import (
"time")

type StreamingSession struct {
    Arn *string `json:"arn,omitempty"`
    CreatedAt *time.Time `json:"createdAt,omitempty"`
    CreatedBy *string `json:"createdBy,omitempty"`
    Ec2InstanceType *string `json:"ec2InstanceType,omitempty"`
    LaunchProfileID *string `json:"launchProfileId,omitempty"`
    OwnedBy *string `json:"ownedBy,omitempty"`
    SessionID *string `json:"sessionId,omitempty"`
    State *StreamingSessionStateEnum `json:"state,omitempty"`
    StatusCode *StreamingSessionStatusCodeEnum `json:"statusCode,omitempty"`
    StatusMessage *string `json:"statusMessage,omitempty"`
    StreamingImageID *string `json:"streamingImageId,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    TerminateAt *time.Time `json:"terminateAt,omitempty"`
    UpdatedAt *time.Time `json:"updatedAt,omitempty"`
    UpdatedBy *string `json:"updatedBy,omitempty"`
    
}

