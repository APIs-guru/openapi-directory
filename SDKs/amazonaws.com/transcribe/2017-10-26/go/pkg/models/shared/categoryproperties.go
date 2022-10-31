package shared

import (
	"time"
)

type CategoryProperties struct {
	CategoryName   *string    `json:"CategoryName,omitempty"`
	CreateTime     *time.Time `json:"CreateTime,omitempty"`
	LastUpdateTime *time.Time `json:"LastUpdateTime,omitempty"`
	Rules          []Rule     `json:"Rules,omitempty"`
}
