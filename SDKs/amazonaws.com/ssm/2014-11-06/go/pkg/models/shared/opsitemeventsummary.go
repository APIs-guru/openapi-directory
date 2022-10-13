package shared

import (
	"time"
)

type OpsItemEventSummary struct {
	CreatedBy   *OpsItemIdentity `json:"CreatedBy"`
	CreatedTime *time.Time       `json:"CreatedTime"`
	Detail      *string          `json:"Detail"`
	DetailType  *string          `json:"DetailType"`
	EventID     *string          `json:"EventId"`
	OpsItemID   *string          `json:"OpsItemId"`
	Source      *string          `json:"Source"`
}
