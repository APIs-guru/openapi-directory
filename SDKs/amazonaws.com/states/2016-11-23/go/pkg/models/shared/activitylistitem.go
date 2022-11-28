package shared

import (
	"time"
)

// ActivityListItem
// Contains details about an activity.
type ActivityListItem struct {
	ActivityArn  string    `json:"activityArn"`
	CreationDate time.Time `json:"creationDate"`
	Name         string    `json:"name"`
}
