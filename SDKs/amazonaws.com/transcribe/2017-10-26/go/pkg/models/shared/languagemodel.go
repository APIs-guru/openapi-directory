package shared

import (
	"time"
)

type LanguageModel struct {
	BaseModelName       *BaseModelNameEnum   `json:"BaseModelName"`
	CreateTime          *time.Time           `json:"CreateTime"`
	FailureReason       *string              `json:"FailureReason"`
	InputDataConfig     *InputDataConfig     `json:"InputDataConfig"`
	LanguageCode        *ClmLanguageCodeEnum `json:"LanguageCode"`
	LastModifiedTime    *time.Time           `json:"LastModifiedTime"`
	ModelName           *string              `json:"ModelName"`
	ModelStatus         *ModelStatusEnum     `json:"ModelStatus"`
	UpgradeAvailability *bool                `json:"UpgradeAvailability"`
}
