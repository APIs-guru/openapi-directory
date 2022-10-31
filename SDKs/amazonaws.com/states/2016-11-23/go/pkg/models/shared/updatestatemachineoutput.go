package shared

import (
	"time"
)

type UpdateStateMachineOutput struct {
	UpdateDate time.Time `json:"updateDate"`
}
