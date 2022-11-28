package shared

import (
	"time"
)

// HomeRegionControl
// A home region control is an object that specifies the home region for an account, with some additional information. It contains a target (always of type <code>ACCOUNT</code>), an ID, and a time at which the home region was set.
type HomeRegionControl struct {
	ControlID     *string    `json:"ControlId,omitempty"`
	HomeRegion    *string    `json:"HomeRegion,omitempty"`
	RequestedTime *time.Time `json:"RequestedTime,omitempty"`
	Target        *Target    `json:"Target,omitempty"`
}
