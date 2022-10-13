package shared

import (
	"time"
)

type AttributeGroup struct {
	Arn            *string           `json:"arn"`
	CreationTime   *time.Time        `json:"creationTime"`
	Description    *string           `json:"description"`
	ID             *string           `json:"id"`
	LastUpdateTime *time.Time        `json:"lastUpdateTime"`
	Name           *string           `json:"name"`
	Tags           map[string]string `json:"tags"`
}
