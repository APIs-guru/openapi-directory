package shared

import (
"time")

type ActivityTypeInfo struct {
    ActivityType ActivityType `json:"activityType"`
    CreationDate time.Time `json:"creationDate"`
    DeprecationDate *time.Time `json:"deprecationDate,omitempty"`
    Description *string `json:"description,omitempty"`
    Status RegistrationStatusEnum `json:"status"`
    
}

