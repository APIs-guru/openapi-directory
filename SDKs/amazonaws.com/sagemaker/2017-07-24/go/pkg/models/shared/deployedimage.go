package shared

import (
	"time"
)

type DeployedImage struct {
	ResolutionTime *time.Time `json:"ResolutionTime,omitempty"`
	ResolvedImage  *string    `json:"ResolvedImage,omitempty"`
	SpecifiedImage *string    `json:"SpecifiedImage,omitempty"`
}
