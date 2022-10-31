package shared

import (
	"time"
)

type CreateWorldTemplateResponse struct {
	Arn                *string           `json:"arn,omitempty"`
	ClientRequestToken *string           `json:"clientRequestToken,omitempty"`
	CreatedAt          *time.Time        `json:"createdAt,omitempty"`
	Name               *string           `json:"name,omitempty"`
	Tags               map[string]string `json:"tags,omitempty"`
}
