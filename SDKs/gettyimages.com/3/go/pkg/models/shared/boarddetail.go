package shared

import (
	"time"
)

type BoardDetail struct {
	AssetCount      *int32            `json:"asset_count,omitempty"`
	Assets          []Asset           `json:"assets,omitempty"`
	CommentCount    *int32            `json:"comment_count,omitempty"`
	DateCreated     *time.Time        `json:"date_created,omitempty"`
	DateLastUpdated *time.Time        `json:"date_last_updated,omitempty"`
	Description     *string           `json:"description,omitempty"`
	ID              *string           `json:"id,omitempty"`
	Links           *Links            `json:"links,omitempty"`
	Name            *string           `json:"name,omitempty"`
	Permissions     *BoardPermissions `json:"permissions,omitempty"`
}
