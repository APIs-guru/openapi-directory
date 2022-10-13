package shared

import (
	"time"
)

type DescribeWorldExportJobResponse struct {
	Arn                *string                      `json:"arn"`
	ClientRequestToken *string                      `json:"clientRequestToken"`
	CreatedAt          *time.Time                   `json:"createdAt"`
	FailureCode        *WorldExportJobErrorCodeEnum `json:"failureCode"`
	FailureReason      *string                      `json:"failureReason"`
	IamRole            *string                      `json:"iamRole"`
	OutputLocation     *OutputLocation              `json:"outputLocation"`
	Status             *WorldExportJobStatusEnum    `json:"status"`
	Tags               map[string]string            `json:"tags"`
	Worlds             []string                     `json:"worlds"`
}
