package shared

import (
	"time"
)

type ServiceSetting struct {
	Arn              *string    `json:"ARN"`
	LastModifiedDate *time.Time `json:"LastModifiedDate"`
	LastModifiedUser *string    `json:"LastModifiedUser"`
	SettingID        *string    `json:"SettingId"`
	SettingValue     *string    `json:"SettingValue"`
	Status           *string    `json:"Status"`
}
