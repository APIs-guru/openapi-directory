package shared

import (
	"time"
)

type DeployedImage struct {
	ResolutionTime *time.Time `json:"ResolutionTime"`
	ResolvedImage  *string    `json:"ResolvedImage"`
	SpecifiedImage *string    `json:"SpecifiedImage"`
}
