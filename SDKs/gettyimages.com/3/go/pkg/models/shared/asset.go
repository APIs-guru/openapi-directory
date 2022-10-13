package shared

import (
	"time"
)

type Asset struct {
	AssetType    *string       `json:"asset_type"`
	DateAdded    *time.Time    `json:"date_added"`
	DisplaySizes []DisplaySize `json:"display_sizes"`
	ID           *string       `json:"id"`
}
