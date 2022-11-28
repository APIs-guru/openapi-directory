package shared

import (
	"time"
)

// CategoryProperties
// An object that contains the rules and additional information about a call analytics category.
type CategoryProperties struct {
	CategoryName   *string    `json:"CategoryName,omitempty"`
	CreateTime     *time.Time `json:"CreateTime,omitempty"`
	LastUpdateTime *time.Time `json:"LastUpdateTime,omitempty"`
	Rules          []Rule     `json:"Rules,omitempty"`
}
