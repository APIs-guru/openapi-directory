package shared

import (
	"time"
)

type VideoCreatePayload struct {
	Description *string    `json:"description,omitempty"`
	Metadata    []Metadata `json:"metadata,omitempty"`
	Mp4Support  *bool      `json:"mp4Support,omitempty"`
	Panoramic   *bool      `json:"panoramic,omitempty"`
	PlayerID    *string    `json:"playerId,omitempty"`
	Public      *bool      `json:"public,omitempty"`
	PublishedAt *time.Time `json:"publishedAt,omitempty"`
	Source      *string    `json:"source,omitempty"`
	Tags        []string   `json:"tags,omitempty"`
	Title       string     `json:"title"`
}
