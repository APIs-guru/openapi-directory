package shared

import (
	"time"
)

type SdsServerTime struct {
	Time *time.Time `json:"time"`
}
