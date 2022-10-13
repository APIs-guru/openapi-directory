package shared

import (
	"time"
)

type EnabledServicePrincipal struct {
	DateEnabled      *time.Time `json:"DateEnabled"`
	ServicePrincipal *string    `json:"ServicePrincipal"`
}
