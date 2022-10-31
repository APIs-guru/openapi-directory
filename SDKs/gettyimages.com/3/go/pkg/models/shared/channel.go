package shared

import (
	"time"
)

type Channel struct {
	AssetChangeType                 *string          `json:"AssetChangeType,omitempty"`
	AssetFamily                     *AssetFamilyEnum `json:"AssetFamily,omitempty"`
	AssetType                       *AssetTypeEnum   `json:"AssetType,omitempty"`
	ChannelID                       *int32           `json:"ChannelId,omitempty"`
	CreateDateUtc                   *time.Time       `json:"CreateDateUtc,omitempty"`
	Metadata                        *string          `json:"Metadata,omitempty"`
	NotificationCount               *int32           `json:"NotificationCount,omitempty"`
	OldestChangeNotificationDateUtc *time.Time       `json:"OldestChangeNotificationDateUtc,omitempty"`
}
