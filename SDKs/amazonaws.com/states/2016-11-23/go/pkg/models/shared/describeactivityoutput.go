package shared

import (
	"time"
)

type DescribeActivityOutput struct {
	ActivityArn  string    `json:"activityArn"`
	CreationDate time.Time `json:"creationDate"`
	Name         string    `json:"name"`
}
