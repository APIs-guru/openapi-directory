package shared

import (
"time")

type Extension struct {
    AvgRating *float32 `json:"avg_rating,omitempty"`
    ExtensionID *int64 `json:"extension_id,omitempty"`
    InstallCount *int64 `json:"install_count,omitempty"`
    PrevAvgRating *float32 `json:"prev_avg_rating,omitempty"`
    PrevInstallCount *int64 `json:"prev_install_count,omitempty"`
    PrevRatingCount *int64 `json:"prev_rating_count,omitempty"`
    RatingCount *int64 `json:"rating_count,omitempty"`
    UpdateTs *time.Time `json:"update_ts,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

