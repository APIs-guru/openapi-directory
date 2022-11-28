package shared

import (
	"time"
)

// ContainerImage
// Describes a container image that is registered to an Amazon Lightsail container service.
type ContainerImage struct {
	CreatedAt *time.Time `json:"createdAt,omitempty"`
	Digest    *string    `json:"digest,omitempty"`
	Image     *string    `json:"image,omitempty"`
}
