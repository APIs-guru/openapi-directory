package shared

import (
	"time"
)

type Operation struct {
	CreatedAt        *time.Time           `json:"createdAt"`
	ErrorCode        *string              `json:"errorCode"`
	ErrorDetails     *string              `json:"errorDetails"`
	ID               *string              `json:"id"`
	IsTerminal       *bool                `json:"isTerminal"`
	Location         *ResourceLocation    `json:"location"`
	OperationDetails *string              `json:"operationDetails"`
	OperationType    *OperationTypeEnum   `json:"operationType"`
	ResourceName     *string              `json:"resourceName"`
	ResourceType     *ResourceTypeEnum    `json:"resourceType"`
	Status           *OperationStatusEnum `json:"status"`
	StatusChangedAt  *time.Time           `json:"statusChangedAt"`
}
