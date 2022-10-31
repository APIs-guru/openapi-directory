package shared

import (
"time")

type StreamingSessionStream struct {
    CreatedAt *time.Time `json:"createdAt,omitempty"`
    CreatedBy *string `json:"createdBy,omitempty"`
    ExpiresAt *time.Time `json:"expiresAt,omitempty"`
    OwnedBy *string `json:"ownedBy,omitempty"`
    State *StreamingSessionStreamStateEnum `json:"state,omitempty"`
    StatusCode *StreamingSessionStreamStatusCodeEnum `json:"statusCode,omitempty"`
    StreamID *string `json:"streamId,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

