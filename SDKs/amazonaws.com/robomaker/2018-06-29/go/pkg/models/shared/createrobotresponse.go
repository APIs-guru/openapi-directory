package shared

import (
	"time"
)

type CreateRobotResponse struct {
	Architecture      *ArchitectureEnum `json:"architecture"`
	Arn               *string           `json:"arn"`
	CreatedAt         *time.Time        `json:"createdAt"`
	GreengrassGroupID *string           `json:"greengrassGroupId"`
	Name              *string           `json:"name"`
	Tags              map[string]string `json:"tags"`
}
