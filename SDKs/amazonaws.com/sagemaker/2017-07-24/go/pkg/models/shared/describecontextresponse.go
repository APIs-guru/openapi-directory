package shared

import (
	"time"
)

type DescribeContextResponse struct {
	ContextArn       *string           `json:"ContextArn"`
	ContextName      *string           `json:"ContextName"`
	ContextType      *string           `json:"ContextType"`
	CreatedBy        *UserContext      `json:"CreatedBy"`
	CreationTime     *time.Time        `json:"CreationTime"`
	Description      *string           `json:"Description"`
	LastModifiedBy   *UserContext      `json:"LastModifiedBy"`
	LastModifiedTime *time.Time        `json:"LastModifiedTime"`
	Properties       map[string]string `json:"Properties"`
	Source           *ContextSource    `json:"Source"`
}
