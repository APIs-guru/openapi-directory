package shared

import (
	"time"
)

type AliasListEntry struct {
	AliasArn        *string    `json:"AliasArn"`
	AliasName       *string    `json:"AliasName"`
	CreationDate    *time.Time `json:"CreationDate"`
	LastUpdatedDate *time.Time `json:"LastUpdatedDate"`
	TargetKeyID     *string    `json:"TargetKeyId"`
}
