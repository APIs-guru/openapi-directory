package shared

import (
	"time"
)

type Image struct {
	CreationTime     time.Time       `json:"CreationTime"`
	Description      *string         `json:"Description"`
	DisplayName      *string         `json:"DisplayName"`
	FailureReason    *string         `json:"FailureReason"`
	ImageArn         string          `json:"ImageArn"`
	ImageName        string          `json:"ImageName"`
	ImageStatus      ImageStatusEnum `json:"ImageStatus"`
	LastModifiedTime time.Time       `json:"LastModifiedTime"`
}
