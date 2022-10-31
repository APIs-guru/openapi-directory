package shared

import (
	"time"
)

type HomeRegionControl struct {
	ControlID     *string    `json:"ControlId,omitempty"`
	HomeRegion    *string    `json:"HomeRegion,omitempty"`
	RequestedTime *time.Time `json:"RequestedTime,omitempty"`
	Target        *Target    `json:"Target,omitempty"`
}
