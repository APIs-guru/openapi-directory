package shared

import (
	"time"
)

// Event
//
//	This data type is used as a response element in the <a>DescribeEvents</a> action.
type Event struct {
	Date             *time.Time
	EventCategories  []string
	Message          *string
	SourceArn        *string
	SourceIdentifier *string
	SourceType       *SourceTypeEnum
}
