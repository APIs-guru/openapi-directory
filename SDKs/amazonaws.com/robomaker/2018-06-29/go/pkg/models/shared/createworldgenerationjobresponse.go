package shared

import (
	"time"
)

type CreateWorldGenerationJobResponse struct {
	Arn                *string                          `json:"arn"`
	ClientRequestToken *string                          `json:"clientRequestToken"`
	CreatedAt          *time.Time                       `json:"createdAt"`
	FailureCode        *WorldGenerationJobErrorCodeEnum `json:"failureCode"`
	Status             *WorldGenerationJobStatusEnum    `json:"status"`
	Tags               map[string]string                `json:"tags"`
	Template           *string                          `json:"template"`
	WorldCount         *WorldCount                      `json:"worldCount"`
	WorldTags          map[string]string                `json:"worldTags"`
}
