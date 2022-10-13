package shared

import (
	"time"
)

type EditorialVideoSearchItem struct {
	AllowedUse           *AllowedUse                  `json:"allowed_use"`
	Artist               *string                      `json:"artist"`
	AssetFamily          *string                      `json:"asset_family"`
	Caption              *string                      `json:"caption"`
	ClipLength           *string                      `json:"clip_length"`
	CollectionCode       *string                      `json:"collection_code"`
	CollectionID         *int32                       `json:"collection_id"`
	CollectionName       *string                      `json:"collection_name"`
	ColorType            *string                      `json:"color_type"`
	Copyright            *string                      `json:"copyright"`
	DateCreated          *time.Time                   `json:"date_created"`
	DisplaySizes         []VideoSearchItemDisplaySize `json:"display_sizes"`
	DownloadProduct      *string                      `json:"download_product"`
	Era                  *string                      `json:"era"`
	EventIds             []int32                      `json:"event_ids"`
	ID                   *string                      `json:"id"`
	IstockLicenses       []IStockLicense              `json:"istock_licenses"`
	Keywords             []Keyword                    `json:"keywords"`
	LargestDownloads     []Download                   `json:"largest_downloads"`
	LicenseModel         *string                      `json:"license_model"`
	MasteredTo           *string                      `json:"mastered_to"`
	OriginallyShotOn     *string                      `json:"originally_shot_on"`
	ProductTypes         []string                     `json:"product_types"`
	ReferralDestinations []ReferralDestination        `json:"referral_destinations"`
	ShotSpeed            *string                      `json:"shot_speed"`
	Source               *string                      `json:"source"`
	Title                *string                      `json:"title"`
}
