package shared

import (
	"time"
)

type StopExecutionOutput struct {
	StopDate time.Time `json:"stopDate"`
}
