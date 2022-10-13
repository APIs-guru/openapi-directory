package shared

import (
	"time"
)

type SettingModel struct {
	ConfigID            *string          `json:"configId"`
	ConfigName          *string          `json:"configName"`
	ExpirationWarningAt *time.Time       `json:"expirationWarningAt"`
	Hint                *string          `json:"hint"`
	Key                 *string          `json:"key"`
	Name                *string          `json:"name"`
	OwnerUserEmail      *string          `json:"ownerUserEmail"`
	OwnerUserFullName   *string          `json:"ownerUserFullName"`
	SettingID           *int32           `json:"settingId"`
	SettingType         *SettingTypeEnum `json:"settingType"`
	Tags                []TagModel       `json:"tags"`
}
