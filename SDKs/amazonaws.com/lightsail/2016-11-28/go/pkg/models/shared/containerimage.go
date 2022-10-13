package shared

import (
	"time"
)

type ContainerImage struct {
	CreatedAt *time.Time `json:"createdAt"`
	Digest    *string    `json:"digest"`
	Image     *string    `json:"image"`
}
