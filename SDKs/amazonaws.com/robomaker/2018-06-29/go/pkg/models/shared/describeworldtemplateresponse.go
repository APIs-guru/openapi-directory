package shared

import (
	"time"
)

type DescribeWorldTemplateResponse struct {
	Arn                *string           `json:"arn"`
	ClientRequestToken *string           `json:"clientRequestToken"`
	CreatedAt          *time.Time        `json:"createdAt"`
	LastUpdatedAt      *time.Time        `json:"lastUpdatedAt"`
	Name               *string           `json:"name"`
	Tags               map[string]string `json:"tags"`
	Version            *string           `json:"version"`
}
