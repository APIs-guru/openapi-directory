package shared

import (
	"time"
)

type PermissionSet struct {
	CreatedDate      *time.Time `json:"CreatedDate,omitempty"`
	Description      *string    `json:"Description,omitempty"`
	Name             *string    `json:"Name,omitempty"`
	PermissionSetArn *string    `json:"PermissionSetArn,omitempty"`
	RelayState       *string    `json:"RelayState,omitempty"`
	SessionDuration  *string    `json:"SessionDuration,omitempty"`
}
