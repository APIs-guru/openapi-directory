package shared

import (
	"time"
)

type StreamingSessionStream struct {
	CreatedAt  *time.Time                            `json:"createdAt"`
	CreatedBy  *string                               `json:"createdBy"`
	ExpiresAt  *time.Time                            `json:"expiresAt"`
	OwnedBy    *string                               `json:"ownedBy"`
	State      *StreamingSessionStreamStateEnum      `json:"state"`
	StatusCode *StreamingSessionStreamStatusCodeEnum `json:"statusCode"`
	StreamID   *string                               `json:"streamId"`
	URL        *string                               `json:"url"`
}
