package shared

import (
	"time"
)

type Resource struct {
	Arn              *string             `json:"arn"`
	CreationTime     *time.Time          `json:"creationTime"`
	LastUpdatedTime  *time.Time          `json:"lastUpdatedTime"`
	ResourceGroupArn *string             `json:"resourceGroupArn"`
	ResourceShareArn *string             `json:"resourceShareArn"`
	Status           *ResourceStatusEnum `json:"status"`
	StatusMessage    *string             `json:"statusMessage"`
	Type             *string             `json:"type"`
}
