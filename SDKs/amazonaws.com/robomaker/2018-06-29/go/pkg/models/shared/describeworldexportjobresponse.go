package shared

import (
	"time"
)

type DescribeWorldExportJobResponse struct {
	Arn                *string                      `json:"arn,omitempty"`
	ClientRequestToken *string                      `json:"clientRequestToken,omitempty"`
	CreatedAt          *time.Time                   `json:"createdAt,omitempty"`
	FailureCode        *WorldExportJobErrorCodeEnum `json:"failureCode,omitempty"`
	FailureReason      *string                      `json:"failureReason,omitempty"`
	IamRole            *string                      `json:"iamRole,omitempty"`
	OutputLocation     *OutputLocation              `json:"outputLocation,omitempty"`
	Status             *WorldExportJobStatusEnum    `json:"status,omitempty"`
	Tags               map[string]string            `json:"tags,omitempty"`
	Worlds             []string                     `json:"worlds,omitempty"`
}
