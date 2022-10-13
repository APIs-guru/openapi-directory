package shared

import (
	"time"
)

type Channel struct {
	AssetChangeType                 *string          `json:"AssetChangeType"`
	AssetFamily                     *AssetFamilyEnum `json:"AssetFamily"`
	AssetType                       *AssetTypeEnum   `json:"AssetType"`
	ChannelID                       *int32           `json:"ChannelId"`
	CreateDateUtc                   *time.Time       `json:"CreateDateUtc"`
	Metadata                        *string          `json:"Metadata"`
	NotificationCount               *int32           `json:"NotificationCount"`
	OldestChangeNotificationDateUtc *time.Time       `json:"OldestChangeNotificationDateUtc"`
}
