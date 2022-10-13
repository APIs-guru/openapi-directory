package shared

import (
	"time"
)

type Parameter struct {
	Arn              *string            `json:"ARN"`
	DataType         *string            `json:"DataType"`
	LastModifiedDate *time.Time         `json:"LastModifiedDate"`
	Name             *string            `json:"Name"`
	Selector         *string            `json:"Selector"`
	SourceResult     *string            `json:"SourceResult"`
	Type             *ParameterTypeEnum `json:"Type"`
	Value            *string            `json:"Value"`
	Version          *int64             `json:"Version"`
}
