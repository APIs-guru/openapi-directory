package shared

import (
	"time"
)

type SettingDataModel struct {
	CreatedAt           *time.Time       `json:"createdAt"`
	CreatorEmail        *string          `json:"creatorEmail"`
	CreatorFullName     *string          `json:"creatorFullName"`
	ExpirationWarningAt *time.Time       `json:"expirationWarningAt"`
	Hint                *string          `json:"hint"`
	IsWatching          *bool            `json:"isWatching"`
	Key                 *string          `json:"key"`
	Name                *string          `json:"name"`
	OwnerEmail          *string          `json:"ownerEmail"`
	OwnerFullName       *string          `json:"ownerFullName"`
	SettingID           *int32           `json:"settingId"`
	SettingType         *SettingTypeEnum `json:"settingType"`
}
