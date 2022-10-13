package shared

import (
	"time"
)

type BotAliasSummary struct {
	BotAliasID          *string             `json:"botAliasId"`
	BotAliasName        *string             `json:"botAliasName"`
	BotAliasStatus      *BotAliasStatusEnum `json:"botAliasStatus"`
	BotVersion          *string             `json:"botVersion"`
	CreationDateTime    *time.Time          `json:"creationDateTime"`
	Description         *string             `json:"description"`
	LastUpdatedDateTime *time.Time          `json:"lastUpdatedDateTime"`
}
