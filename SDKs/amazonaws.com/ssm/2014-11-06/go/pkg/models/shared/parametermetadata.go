package shared

import (
	"time"
)

type ParameterMetadata struct {
	AllowedPattern   *string                 `json:"AllowedPattern"`
	DataType         *string                 `json:"DataType"`
	Description      *string                 `json:"Description"`
	KeyID            *string                 `json:"KeyId"`
	LastModifiedDate *time.Time              `json:"LastModifiedDate"`
	LastModifiedUser *string                 `json:"LastModifiedUser"`
	Name             *string                 `json:"Name"`
	Policies         []ParameterInlinePolicy `json:"Policies"`
	Tier             *ParameterTierEnum      `json:"Tier"`
	Type             *ParameterTypeEnum      `json:"Type"`
	Version          *int64                  `json:"Version"`
}
