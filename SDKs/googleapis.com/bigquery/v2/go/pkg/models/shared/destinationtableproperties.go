package shared

import (
	"time"
)

type DestinationTableProperties struct {
	Description    *string           `json:"description"`
	ExpirationTime *time.Time        `json:"expirationTime"`
	FriendlyName   *string           `json:"friendlyName"`
	Labels         map[string]string `json:"labels"`
}
