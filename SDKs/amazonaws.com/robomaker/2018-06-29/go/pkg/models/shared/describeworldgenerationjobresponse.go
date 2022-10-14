package shared

import (
	"time"
)

type DescribeWorldGenerationJobResponse struct {
	Arn                   *string                          `json:"arn,omitempty"`
	ClientRequestToken    *string                          `json:"clientRequestToken,omitempty"`
	CreatedAt             *time.Time                       `json:"createdAt,omitempty"`
	FailureCode           *WorldGenerationJobErrorCodeEnum `json:"failureCode,omitempty"`
	FailureReason         *string                          `json:"failureReason,omitempty"`
	FinishedWorldsSummary *FinishedWorldsSummary           `json:"finishedWorldsSummary,omitempty"`
	Status                *WorldGenerationJobStatusEnum    `json:"status,omitempty"`
	Tags                  map[string]string                `json:"tags,omitempty"`
	Template              *string                          `json:"template,omitempty"`
	WorldCount            *WorldCount                      `json:"worldCount,omitempty"`
	WorldTags             map[string]string                `json:"worldTags,omitempty"`
}
