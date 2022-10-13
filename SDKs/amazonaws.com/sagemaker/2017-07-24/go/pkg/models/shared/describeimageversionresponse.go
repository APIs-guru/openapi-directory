package shared

import (
	"time"
)

type DescribeImageVersionResponse struct {
	BaseImage          *string                 `json:"BaseImage"`
	ContainerImage     *string                 `json:"ContainerImage"`
	CreationTime       *time.Time              `json:"CreationTime"`
	FailureReason      *string                 `json:"FailureReason"`
	ImageArn           *string                 `json:"ImageArn"`
	ImageVersionArn    *string                 `json:"ImageVersionArn"`
	ImageVersionStatus *ImageVersionStatusEnum `json:"ImageVersionStatus"`
	LastModifiedTime   *time.Time              `json:"LastModifiedTime"`
	Version            *int64                  `json:"Version"`
}
