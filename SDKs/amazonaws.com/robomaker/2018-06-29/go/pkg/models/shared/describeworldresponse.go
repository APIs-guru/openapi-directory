package shared

import (
	"time"
)

type DescribeWorldResponse struct {
	Arn                  *string           `json:"arn,omitempty"`
	CreatedAt            *time.Time        `json:"createdAt,omitempty"`
	GenerationJob        *string           `json:"generationJob,omitempty"`
	Tags                 map[string]string `json:"tags,omitempty"`
	Template             *string           `json:"template,omitempty"`
	WorldDescriptionBody *string           `json:"worldDescriptionBody,omitempty"`
}
