package shared

import (
	"time"
)

type DescribeStreamProcessorResponse struct {
	CreationTimestamp   *time.Time                 `json:"CreationTimestamp"`
	Input               *StreamProcessorInput      `json:"Input"`
	LastUpdateTimestamp *time.Time                 `json:"LastUpdateTimestamp"`
	Name                *string                    `json:"Name"`
	Output              *StreamProcessorOutput     `json:"Output"`
	RoleArn             *string                    `json:"RoleArn"`
	Settings            *StreamProcessorSettings   `json:"Settings"`
	Status              *StreamProcessorStatusEnum `json:"Status"`
	StatusMessage       *string                    `json:"StatusMessage"`
	StreamProcessorArn  *string                    `json:"StreamProcessorArn"`
}
