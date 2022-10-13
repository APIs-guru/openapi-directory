package shared

import (
	"time"
)

type Video struct {
	Assets      *VideoAssets  `json:"assets"`
	Description *string       `json:"description"`
	Metadata    []Metadata    `json:"metadata"`
	Mp4Support  *bool         `json:"mp4Support"`
	Panoramic   *bool         `json:"panoramic"`
	PlayerID    *string       `json:"playerId"`
	Public      *bool         `json:"public"`
	PublishedAt *string       `json:"publishedAt"`
	Source      *VideoSource  `json:"source"`
	Tags        []interface{} `json:"tags"`
	Title       *string       `json:"title"`
	UpdatedAt   *time.Time    `json:"updatedAt"`
	VideoID     *string       `json:"videoId"`
}
