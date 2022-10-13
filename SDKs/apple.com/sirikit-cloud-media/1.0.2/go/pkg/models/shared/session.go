package shared

import (
	"time"
)

type Session struct {
	Constraints   Constraints    `json:"constraints"`
	Deadline      time.Time      `json:"deadline"`
	Identifier    string         `json:"identifier"`
	PlayerContext *PlayerContext `json:"playerContext"`
	Requested     time.Time      `json:"requested"`
	Version       string         `json:"version"`
}
