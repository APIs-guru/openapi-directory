package shared

import (
	"time"
)

type CategoryProperties struct {
	CategoryName   *string    `json:"CategoryName"`
	CreateTime     *time.Time `json:"CreateTime"`
	LastUpdateTime *time.Time `json:"LastUpdateTime"`
	Rules          []Rule     `json:"Rules"`
}
