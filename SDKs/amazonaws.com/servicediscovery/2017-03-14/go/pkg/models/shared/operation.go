package shared

import (
	"time"
)

type Operation struct {
	CreateDate   *time.Time           `json:"CreateDate"`
	ErrorCode    *string              `json:"ErrorCode"`
	ErrorMessage *string              `json:"ErrorMessage"`
	ID           *string              `json:"Id"`
	Status       *OperationStatusEnum `json:"Status"`
	Targets      map[string]string    `json:"Targets"`
	Type         *OperationTypeEnum   `json:"Type"`
	UpdateDate   *time.Time           `json:"UpdateDate"`
}
