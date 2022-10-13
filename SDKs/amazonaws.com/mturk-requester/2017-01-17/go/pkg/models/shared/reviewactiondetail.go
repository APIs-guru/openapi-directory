package shared

import (
	"time"
)

type ReviewActionDetail struct {
	ActionID     *string                 `json:"ActionId"`
	ActionName   *string                 `json:"ActionName"`
	CompleteTime *time.Time              `json:"CompleteTime"`
	ErrorCode    *string                 `json:"ErrorCode"`
	Result       *string                 `json:"Result"`
	Status       *ReviewActionStatusEnum `json:"Status"`
	TargetID     *string                 `json:"TargetId"`
	TargetType   *string                 `json:"TargetType"`
}
