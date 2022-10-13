package shared

import (
	"time"
)

type CreateWorldTemplateResponse struct {
	Arn                *string           `json:"arn"`
	ClientRequestToken *string           `json:"clientRequestToken"`
	CreatedAt          *time.Time        `json:"createdAt"`
	Name               *string           `json:"name"`
	Tags               map[string]string `json:"tags"`
}
