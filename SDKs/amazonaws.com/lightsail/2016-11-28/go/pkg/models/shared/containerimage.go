package shared

import (
	"time"
)

type ContainerImage struct {
	CreatedAt *time.Time `json:"createdAt,omitempty"`
	Digest    *string    `json:"digest,omitempty"`
	Image     *string    `json:"image,omitempty"`
}
