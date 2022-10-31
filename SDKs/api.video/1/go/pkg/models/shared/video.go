package shared

import (
	"time"
)

type Video struct {
	Assets      *VideoAssets  `json:"assets,omitempty"`
	Description *string       `json:"description,omitempty"`
	Metadata    []Metadata    `json:"metadata,omitempty"`
	Mp4Support  *bool         `json:"mp4Support,omitempty"`
	Panoramic   *bool         `json:"panoramic,omitempty"`
	PlayerID    *string       `json:"playerId,omitempty"`
	Public      *bool         `json:"public,omitempty"`
	PublishedAt *string       `json:"publishedAt,omitempty"`
	Source      *VideoSource  `json:"source,omitempty"`
	Tags        []interface{} `json:"tags,omitempty"`
	Title       *string       `json:"title,omitempty"`
	UpdatedAt   *time.Time    `json:"updatedAt,omitempty"`
	VideoID     *string       `json:"videoId,omitempty"`
}
