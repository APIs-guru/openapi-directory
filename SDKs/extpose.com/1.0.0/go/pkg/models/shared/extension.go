package shared

import (
	"time"
)

type Extension struct {
	AvgRating        *float32   `json:"avg_rating"`
	ExtensionID      *int64     `json:"extension_id"`
	InstallCount     *int64     `json:"install_count"`
	PrevAvgRating    *float32   `json:"prev_avg_rating"`
	PrevInstallCount *int64     `json:"prev_install_count"`
	PrevRatingCount  *int64     `json:"prev_rating_count"`
	RatingCount      *int64     `json:"rating_count"`
	UpdateTs         *time.Time `json:"update_ts"`
	URL              *string    `json:"url"`
}
