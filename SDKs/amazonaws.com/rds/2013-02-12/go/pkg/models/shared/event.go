package shared

import (
	"time"
)

type Event struct {
	Date             *time.Time
	EventCategories  []string
	Message          *string
	SourceIdentifier *string
	SourceType       *SourceTypeEnum
}
