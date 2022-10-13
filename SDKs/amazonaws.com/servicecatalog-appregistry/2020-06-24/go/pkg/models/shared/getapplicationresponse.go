package shared

import (
	"time"
)

type GetApplicationResponse struct {
	Arn                     *string           `json:"arn"`
	AssociatedResourceCount *int64            `json:"associatedResourceCount"`
	CreationTime            *time.Time        `json:"creationTime"`
	Description             *string           `json:"description"`
	ID                      *string           `json:"id"`
	Integrations            *Integrations     `json:"integrations"`
	LastUpdateTime          *time.Time        `json:"lastUpdateTime"`
	Name                    *string           `json:"name"`
	Tags                    map[string]string `json:"tags"`
}
