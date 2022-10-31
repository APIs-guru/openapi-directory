package shared

import (
"time")

type BotAliasSummary struct {
    BotAliasID *string `json:"botAliasId,omitempty"`
    BotAliasName *string `json:"botAliasName,omitempty"`
    BotAliasStatus *BotAliasStatusEnum `json:"botAliasStatus,omitempty"`
    BotVersion *string `json:"botVersion,omitempty"`
    CreationDateTime *time.Time `json:"creationDateTime,omitempty"`
    Description *string `json:"description,omitempty"`
    LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime,omitempty"`
    
}

