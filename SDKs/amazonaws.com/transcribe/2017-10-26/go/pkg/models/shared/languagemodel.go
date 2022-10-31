package shared

import (
"time")

type LanguageModel struct {
    BaseModelName *BaseModelNameEnum `json:"BaseModelName,omitempty"`
    CreateTime *time.Time `json:"CreateTime,omitempty"`
    FailureReason *string `json:"FailureReason,omitempty"`
    InputDataConfig *InputDataConfig `json:"InputDataConfig,omitempty"`
    LanguageCode *ClmLanguageCodeEnum `json:"LanguageCode,omitempty"`
    LastModifiedTime *time.Time `json:"LastModifiedTime,omitempty"`
    ModelName *string `json:"ModelName,omitempty"`
    ModelStatus *ModelStatusEnum `json:"ModelStatus,omitempty"`
    UpgradeAvailability *bool `json:"UpgradeAvailability,omitempty"`
    
}

