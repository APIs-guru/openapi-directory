package shared

import (
	"time"
)

// EnabledServicePrincipal
// A structure that contains details of a service principal that represents an AWS service that is enabled to integrate with AWS Organizations.
type EnabledServicePrincipal struct {
	DateEnabled      *time.Time `json:"DateEnabled,omitempty"`
	ServicePrincipal *string    `json:"ServicePrincipal,omitempty"`
}
