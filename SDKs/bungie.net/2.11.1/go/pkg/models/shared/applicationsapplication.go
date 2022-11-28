package shared

import (
	"time"
)

type ApplicationsApplication struct {
	ApplicationID  *int32
	CreationDate   *time.Time
	FirstPublished *time.Time
	Link           *string
	Name           *string
	Origin         *string
	RedirectURL    *string
	Scope          *int64
	Status         *int32
	StatusChanged  *time.Time
	Team           []ApplicationsApplicationDeveloper
}
