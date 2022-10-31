package shared

import (
	"time"
)

type DescribeContextResponse struct {
	ContextArn       *string           `json:"ContextArn,omitempty"`
	ContextName      *string           `json:"ContextName,omitempty"`
	ContextType      *string           `json:"ContextType,omitempty"`
	CreatedBy        *UserContext      `json:"CreatedBy,omitempty"`
	CreationTime     *time.Time        `json:"CreationTime,omitempty"`
	Description      *string           `json:"Description,omitempty"`
	LastModifiedBy   *UserContext      `json:"LastModifiedBy,omitempty"`
	LastModifiedTime *time.Time        `json:"LastModifiedTime,omitempty"`
	Properties       map[string]string `json:"Properties,omitempty"`
	Source           *ContextSource    `json:"Source,omitempty"`
}
