package shared

import (
	"time"
)

type BoardDetail struct {
	AssetCount      *int32            `json:"asset_count"`
	Assets          []Asset           `json:"assets"`
	CommentCount    *int32            `json:"comment_count"`
	DateCreated     *time.Time        `json:"date_created"`
	DateLastUpdated *time.Time        `json:"date_last_updated"`
	Description     *string           `json:"description"`
	ID              *string           `json:"id"`
	Links           *Links            `json:"links"`
	Name            *string           `json:"name"`
	Permissions     *BoardPermissions `json:"permissions"`
}
