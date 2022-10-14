package shared

import (
	"time"
)

type Principal struct {
	CreationTime     *time.Time `json:"creationTime,omitempty"`
	External         *bool      `json:"external,omitempty"`
	ID               *string    `json:"id,omitempty"`
	LastUpdatedTime  *time.Time `json:"lastUpdatedTime,omitempty"`
	ResourceShareArn *string    `json:"resourceShareArn,omitempty"`
}
