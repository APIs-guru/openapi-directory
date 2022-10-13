package shared

import (
	"time"
)

type ImageSearchItemEditorial struct {
	AllowedUse           *AllowedUse                  `json:"allowed_use"`
	AlternativeIds       map[string]string            `json:"alternative_ids"`
	Artist               *string                      `json:"artist"`
	AssetFamily          *string                      `json:"asset_family"`
	CallForImage         *bool                        `json:"call_for_image"`
	Caption              *string                      `json:"caption"`
	CollectionCode       *string                      `json:"collection_code"`
	CollectionID         *int32                       `json:"collection_id"`
	CollectionName       *string                      `json:"collection_name"`
	ColorType            *string                      `json:"color_type"`
	Copyright            *string                      `json:"copyright"`
	DateCameraShot       *time.Time                   `json:"date_camera_shot"`
	DateCreated          *time.Time                   `json:"date_created"`
	DisplaySizes         []ImageSearchItemDisplaySize `json:"display_sizes"`
	DownloadProduct      *string                      `json:"download_product"`
	EditorialSegments    []string                     `json:"editorial_segments"`
	EditorialSource      *EditorialSource             `json:"editorial_source"`
	EventIds             []int32                      `json:"event_ids"`
	GraphicalStyle       *string                      `json:"graphical_style"`
	ID                   *string                      `json:"id"`
	Keywords             []Keyword                    `json:"keywords"`
	LargestDownloads     []Download                   `json:"largest_downloads"`
	LicenseModel         *string                      `json:"license_model"`
	MaxDimensions        *MaxDimensions               `json:"max_dimensions"`
	Orientation          *string                      `json:"orientation"`
	People               []string                     `json:"people"`
	ProductTypes         []string                     `json:"product_types"`
	QualityRank          *int32                       `json:"quality_rank"`
	ReferralDestinations []ReferralDestination        `json:"referral_destinations"`
	Title                *string                      `json:"title"`
	URIOembed            *string                      `json:"uri_oembed"`
}
