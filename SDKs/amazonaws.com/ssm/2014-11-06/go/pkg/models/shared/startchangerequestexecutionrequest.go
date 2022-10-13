package shared

import (
	"time"
)

type StartChangeRequestExecutionRequest struct {
	ChangeDetails     *string             `json:"ChangeDetails"`
	ChangeRequestName *string             `json:"ChangeRequestName"`
	ClientToken       *string             `json:"ClientToken"`
	DocumentName      string              `json:"DocumentName"`
	DocumentVersion   *string             `json:"DocumentVersion"`
	Parameters        map[string][]string `json:"Parameters"`
	Runbooks          []Runbook           `json:"Runbooks"`
	ScheduledEndTime  *time.Time          `json:"ScheduledEndTime"`
	ScheduledTime     *time.Time          `json:"ScheduledTime"`
	Tags              []Tag               `json:"Tags"`
}
