package shared

import (
	"time"
)

// ActivityTypeInfo
// Detailed information about an activity type.
type ActivityTypeInfo struct {
	ActivityType    ActivityType           `json:"activityType"`
	CreationDate    time.Time              `json:"creationDate"`
	DeprecationDate *time.Time             `json:"deprecationDate,omitempty"`
	Description     *string                `json:"description,omitempty"`
	Status          RegistrationStatusEnum `json:"status"`
}
