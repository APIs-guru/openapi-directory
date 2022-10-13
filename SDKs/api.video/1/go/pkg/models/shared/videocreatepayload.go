package shared

import (
	"time"
)

type VideoCreatePayload struct {
	Description *string    `json:"description"`
	Metadata    []Metadata `json:"metadata"`
	Mp4Support  *bool      `json:"mp4Support"`
	Panoramic   *bool      `json:"panoramic"`
	PlayerID    *string    `json:"playerId"`
	Public      *bool      `json:"public"`
	PublishedAt *time.Time `json:"publishedAt"`
	Source      *string    `json:"source"`
	Tags        []string   `json:"tags"`
	Title       string     `json:"title"`
}
