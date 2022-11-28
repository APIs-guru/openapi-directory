package shared

import (
	"time"
)

// Parameter
// An Amazon Web Services Systems Manager parameter in Parameter Store.
type Parameter struct {
	Arn              *string            `json:"ARN,omitempty"`
	DataType         *string            `json:"DataType,omitempty"`
	LastModifiedDate *time.Time         `json:"LastModifiedDate,omitempty"`
	Name             *string            `json:"Name,omitempty"`
	Selector         *string            `json:"Selector,omitempty"`
	SourceResult     *string            `json:"SourceResult,omitempty"`
	Type             *ParameterTypeEnum `json:"Type,omitempty"`
	Value            *string            `json:"Value,omitempty"`
	Version          *int64             `json:"Version,omitempty"`
}
