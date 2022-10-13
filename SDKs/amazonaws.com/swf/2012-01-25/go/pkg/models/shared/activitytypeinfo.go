package shared

import (
	"time"
)

type ActivityTypeInfo struct {
	ActivityType    ActivityType           `json:"activityType"`
	CreationDate    time.Time              `json:"creationDate"`
	DeprecationDate *time.Time             `json:"deprecationDate"`
	Description     *string                `json:"description"`
	Status          RegistrationStatusEnum `json:"status"`
}
