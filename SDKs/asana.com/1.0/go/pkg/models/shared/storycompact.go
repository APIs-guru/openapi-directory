package shared

import (
	"time"
)

type StoryCompact struct {
	CreatedAt       *time.Time   `json:"created_at"`
	CreatedBy       *UserCompact `json:"created_by"`
	Gid             *string      `json:"gid"`
	ResourceSubtype *string      `json:"resource_subtype"`
	ResourceType    *string      `json:"resource_type"`
	Text            *string      `json:"text"`
}
