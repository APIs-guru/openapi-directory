package shared

import (
	"time"
)

type Principal struct {
	CreationTime     *time.Time `json:"creationTime"`
	External         *bool      `json:"external"`
	ID               *string    `json:"id"`
	LastUpdatedTime  *time.Time `json:"lastUpdatedTime"`
	ResourceShareArn *string    `json:"resourceShareArn"`
}
