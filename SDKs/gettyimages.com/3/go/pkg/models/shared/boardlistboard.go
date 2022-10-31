package shared

import (
"time")

type BoardListBoard struct {
    AssetCount *int32 `json:"asset_count,omitempty"`
    BoardRelationship *string `json:"board_relationship,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateLastUpdated *time.Time `json:"date_last_updated,omitempty"`
    Description *string `json:"description,omitempty"`
    HeroAsset *Asset `json:"hero_asset,omitempty"`
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

