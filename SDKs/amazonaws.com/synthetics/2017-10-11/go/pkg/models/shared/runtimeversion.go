package shared

import (
	"time"
)

type RuntimeVersion struct {
	DeprecationDate *time.Time `json:"DeprecationDate,omitempty"`
	Description     *string    `json:"Description,omitempty"`
	ReleaseDate     *time.Time `json:"ReleaseDate,omitempty"`
	VersionName     *string    `json:"VersionName,omitempty"`
}
