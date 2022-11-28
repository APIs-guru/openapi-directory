package shared

import (
	"time"
)

// Image
// A SageMaker image. A SageMaker image represents a set of container images that are derived from a common base container image. Each of these container images is represented by a SageMaker <code>ImageVersion</code>.
type Image struct {
	CreationTime     time.Time       `json:"CreationTime"`
	Description      *string         `json:"Description,omitempty"`
	DisplayName      *string         `json:"DisplayName,omitempty"`
	FailureReason    *string         `json:"FailureReason,omitempty"`
	ImageArn         string          `json:"ImageArn"`
	ImageName        string          `json:"ImageName"`
	ImageStatus      ImageStatusEnum `json:"ImageStatus"`
	LastModifiedTime time.Time       `json:"LastModifiedTime"`
}
