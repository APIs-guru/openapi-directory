package shared

import (
	"time"
)

type PermissionSet struct {
	CreatedDate      *time.Time `json:"CreatedDate"`
	Description      *string    `json:"Description"`
	Name             *string    `json:"Name"`
	PermissionSetArn *string    `json:"PermissionSetArn"`
	RelayState       *string    `json:"RelayState"`
	SessionDuration  *string    `json:"SessionDuration"`
}
