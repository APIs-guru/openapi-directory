package shared

import (
	"time"
)

type DescribeImageVersionResponse struct {
	BaseImage          *string                 `json:"BaseImage,omitempty"`
	ContainerImage     *string                 `json:"ContainerImage,omitempty"`
	CreationTime       *time.Time              `json:"CreationTime,omitempty"`
	FailureReason      *string                 `json:"FailureReason,omitempty"`
	ImageArn           *string                 `json:"ImageArn,omitempty"`
	ImageVersionArn    *string                 `json:"ImageVersionArn,omitempty"`
	ImageVersionStatus *ImageVersionStatusEnum `json:"ImageVersionStatus,omitempty"`
	LastModifiedTime   *time.Time              `json:"LastModifiedTime,omitempty"`
	Version            *int64                  `json:"Version,omitempty"`
}
