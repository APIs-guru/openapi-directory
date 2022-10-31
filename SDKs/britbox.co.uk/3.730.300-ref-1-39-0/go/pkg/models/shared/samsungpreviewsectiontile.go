package shared

import (
"time")

type SamsungPreviewSectionTile struct {
    ActionData string `json:"action_data"`
    DisplayFrom *time.Time `json:"display_from,omitempty"`
    DisplayUntil *time.Time `json:"display_until,omitempty"`
    ImageRatio string `json:"image_ratio"`
    ImageURL string `json:"image_url"`
    IsPlayable bool `json:"is_playable"`
    Position *int32 `json:"position,omitempty"`
    Subtitle *string `json:"subtitle,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

