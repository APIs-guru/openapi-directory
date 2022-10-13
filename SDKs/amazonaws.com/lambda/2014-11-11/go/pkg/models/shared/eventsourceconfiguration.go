package shared

import (
	"time"
)

type EventSourceConfiguration struct {
	BatchSize    *int64            `json:"BatchSize"`
	EventSource  *string           `json:"EventSource"`
	FunctionName *string           `json:"FunctionName"`
	IsActive     *bool             `json:"IsActive"`
	LastModified *time.Time        `json:"LastModified"`
	Parameters   map[string]string `json:"Parameters"`
	Role         *string           `json:"Role"`
	Status       *string           `json:"Status"`
	UUID         *string           `json:"UUID"`
}
