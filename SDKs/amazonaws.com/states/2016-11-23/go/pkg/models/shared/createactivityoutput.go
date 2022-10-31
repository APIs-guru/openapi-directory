package shared

import (
	"time"
)

type CreateActivityOutput struct {
	ActivityArn  string    `json:"activityArn"`
	CreationDate time.Time `json:"creationDate"`
}
