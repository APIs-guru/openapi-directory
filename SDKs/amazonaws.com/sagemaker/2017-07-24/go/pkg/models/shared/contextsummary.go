package shared

import (
	"time"
)

type ContextSummary struct {
	ContextArn       *string        `json:"ContextArn"`
	ContextName      *string        `json:"ContextName"`
	ContextType      *string        `json:"ContextType"`
	CreationTime     *time.Time     `json:"CreationTime"`
	LastModifiedTime *time.Time     `json:"LastModifiedTime"`
	Source           *ContextSource `json:"Source"`
}
