package shared

import (
	"time"
)

type CreateRobotResponse struct {
	Architecture      *ArchitectureEnum `json:"architecture,omitempty"`
	Arn               *string           `json:"arn,omitempty"`
	CreatedAt         *time.Time        `json:"createdAt,omitempty"`
	GreengrassGroupID *string           `json:"greengrassGroupId,omitempty"`
	Name              *string           `json:"name,omitempty"`
	Tags              map[string]string `json:"tags,omitempty"`
}
