package shared

import (
	"time"
)

type RuntimeVersion struct {
	DeprecationDate *time.Time `json:"DeprecationDate"`
	Description     *string    `json:"Description"`
	ReleaseDate     *time.Time `json:"ReleaseDate"`
	VersionName     *string    `json:"VersionName"`
}
