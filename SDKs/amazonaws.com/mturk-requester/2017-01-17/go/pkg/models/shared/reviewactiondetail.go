package shared

import (
	"time"
)

type ReviewActionDetail struct {
	ActionID     *string                 `json:"ActionId,omitempty"`
	ActionName   *string                 `json:"ActionName,omitempty"`
	CompleteTime *time.Time              `json:"CompleteTime,omitempty"`
	ErrorCode    *string                 `json:"ErrorCode,omitempty"`
	Result       *string                 `json:"Result,omitempty"`
	Status       *ReviewActionStatusEnum `json:"Status,omitempty"`
	TargetID     *string                 `json:"TargetId,omitempty"`
	TargetType   *string                 `json:"TargetType,omitempty"`
}
