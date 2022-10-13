package shared

import (
	"time"
)

type PlayerAssets struct {
	Link *string `json:"link"`
	Logo *string `json:"logo"`
}

type Player struct {
	Assets                *PlayerAssets `json:"assets"`
	BackgroundBottom      *string       `json:"backgroundBottom"`
	BackgroundText        *string       `json:"backgroundText"`
	BackgroundTop         *string       `json:"backgroundTop"`
	CreatedAt             *time.Time    `json:"createdAt"`
	EnableAPI             *bool         `json:"enableApi"`
	EnableControls        *bool         `json:"enableControls"`
	ForceAutoplay         *bool         `json:"forceAutoplay"`
	ForceLoop             *bool         `json:"forceLoop"`
	HideTitle             *bool         `json:"hideTitle"`
	Link                  *string       `json:"link"`
	LinkActive            *string       `json:"linkActive"`
	LinkHover             *string       `json:"linkHover"`
	PlayerID              *string       `json:"playerId"`
	ShapeAspect           *string       `json:"shapeAspect"`
	ShapeBackgroundBottom *string       `json:"shapeBackgroundBottom"`
	ShapeBackgroundTop    *string       `json:"shapeBackgroundTop"`
	ShapeMargin           *int64        `json:"shapeMargin"`
	ShapeRadius           *int64        `json:"shapeRadius"`
	Text                  *string       `json:"text"`
	TrackBackground       *string       `json:"trackBackground"`
	TrackPlayed           *string       `json:"trackPlayed"`
	TrackUnplayed         *string       `json:"trackUnplayed"`
	UpdatedAt             *time.Time    `json:"updatedAt"`
}
