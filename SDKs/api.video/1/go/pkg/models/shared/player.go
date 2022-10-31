package shared

import (
"time")

type PlayerAssets struct {
    Link *string `json:"link,omitempty"`
    Logo *string `json:"logo,omitempty"`
    
}

type Player struct {
    Assets *PlayerAssets `json:"assets,omitempty"`
    BackgroundBottom *string `json:"backgroundBottom,omitempty"`
    BackgroundText *string `json:"backgroundText,omitempty"`
    BackgroundTop *string `json:"backgroundTop,omitempty"`
    CreatedAt *time.Time `json:"createdAt,omitempty"`
    EnableAPI *bool `json:"enableApi,omitempty"`
    EnableControls *bool `json:"enableControls,omitempty"`
    ForceAutoplay *bool `json:"forceAutoplay,omitempty"`
    ForceLoop *bool `json:"forceLoop,omitempty"`
    HideTitle *bool `json:"hideTitle,omitempty"`
    Link *string `json:"link,omitempty"`
    LinkActive *string `json:"linkActive,omitempty"`
    LinkHover *string `json:"linkHover,omitempty"`
    PlayerID *string `json:"playerId,omitempty"`
    ShapeAspect *string `json:"shapeAspect,omitempty"`
    ShapeBackgroundBottom *string `json:"shapeBackgroundBottom,omitempty"`
    ShapeBackgroundTop *string `json:"shapeBackgroundTop,omitempty"`
    ShapeMargin *int64 `json:"shapeMargin,omitempty"`
    ShapeRadius *int64 `json:"shapeRadius,omitempty"`
    Text *string `json:"text,omitempty"`
    TrackBackground *string `json:"trackBackground,omitempty"`
    TrackPlayed *string `json:"trackPlayed,omitempty"`
    TrackUnplayed *string `json:"trackUnplayed,omitempty"`
    UpdatedAt *time.Time `json:"updatedAt,omitempty"`
    
}

