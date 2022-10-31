package shared

import (
	"time"
)

type ImageSearchItemEditorial struct {
	AllowedUse           *AllowedUse                  `json:"allowed_use,omitempty"`
	AlternativeIds       map[string]string            `json:"alternative_ids,omitempty"`
	Artist               *string                      `json:"artist,omitempty"`
	AssetFamily          *string                      `json:"asset_family,omitempty"`
	CallForImage         *bool                        `json:"call_for_image,omitempty"`
	Caption              *string                      `json:"caption,omitempty"`
	CollectionCode       *string                      `json:"collection_code,omitempty"`
	CollectionID         *int32                       `json:"collection_id,omitempty"`
	CollectionName       *string                      `json:"collection_name,omitempty"`
	ColorType            *string                      `json:"color_type,omitempty"`
	Copyright            *string                      `json:"copyright,omitempty"`
	DateCameraShot       *time.Time                   `json:"date_camera_shot,omitempty"`
	DateCreated          *time.Time                   `json:"date_created,omitempty"`
	DisplaySizes         []ImageSearchItemDisplaySize `json:"display_sizes,omitempty"`
	DownloadProduct      *string                      `json:"download_product,omitempty"`
	EditorialSegments    []string                     `json:"editorial_segments,omitempty"`
	EditorialSource      *EditorialSource             `json:"editorial_source,omitempty"`
	EventIds             []int32                      `json:"event_ids,omitempty"`
	GraphicalStyle       *string                      `json:"graphical_style,omitempty"`
	ID                   *string                      `json:"id,omitempty"`
	Keywords             []Keyword                    `json:"keywords,omitempty"`
	LargestDownloads     []Download                   `json:"largest_downloads,omitempty"`
	LicenseModel         *string                      `json:"license_model,omitempty"`
	MaxDimensions        *MaxDimensions               `json:"max_dimensions,omitempty"`
	Orientation          *string                      `json:"orientation,omitempty"`
	People               []string                     `json:"people,omitempty"`
	ProductTypes         []string                     `json:"product_types,omitempty"`
	QualityRank          *int32                       `json:"quality_rank,omitempty"`
	ReferralDestinations []ReferralDestination        `json:"referral_destinations,omitempty"`
	Title                *string                      `json:"title,omitempty"`
	URIOembed            *string                      `json:"uri_oembed,omitempty"`
}
