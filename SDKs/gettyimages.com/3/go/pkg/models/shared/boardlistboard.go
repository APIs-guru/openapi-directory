package shared

import (
	"time"
)

type BoardListBoard struct {
	AssetCount        *int32     `json:"asset_count"`
	BoardRelationship *string    `json:"board_relationship"`
	DateCreated       *time.Time `json:"date_created"`
	DateLastUpdated   *time.Time `json:"date_last_updated"`
	Description       *string    `json:"description"`
	HeroAsset         *Asset     `json:"hero_asset"`
	ID                *string    `json:"id"`
	Name              *string    `json:"name"`
}
