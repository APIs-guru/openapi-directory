package shared

import (
	"time"
)

type HomeRegionControl struct {
	ControlID     *string    `json:"ControlId"`
	HomeRegion    *string    `json:"HomeRegion"`
	RequestedTime *time.Time `json:"RequestedTime"`
	Target        *Target    `json:"Target"`
}
