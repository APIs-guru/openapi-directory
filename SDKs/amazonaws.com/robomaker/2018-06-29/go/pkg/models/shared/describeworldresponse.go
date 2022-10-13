package shared

import (
	"time"
)

type DescribeWorldResponse struct {
	Arn                  *string           `json:"arn"`
	CreatedAt            *time.Time        `json:"createdAt"`
	GenerationJob        *string           `json:"generationJob"`
	Tags                 map[string]string `json:"tags"`
	Template             *string           `json:"template"`
	WorldDescriptionBody *string           `json:"worldDescriptionBody"`
}
