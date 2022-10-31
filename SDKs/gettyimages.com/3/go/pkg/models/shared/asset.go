package shared

import (
"time")

type Asset struct {
    AssetType *string `json:"asset_type,omitempty"`
    DateAdded *time.Time `json:"date_added,omitempty"`
    DisplaySizes []DisplaySize `json:"display_sizes,omitempty"`
    ID *string `json:"id,omitempty"`
    
}

