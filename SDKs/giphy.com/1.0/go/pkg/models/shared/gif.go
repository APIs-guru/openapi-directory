package shared

import (
	"time"
)

// GifImages
// An object containing data for various available formats and sizes of this GIF.
type GifImages struct {
	Downsized              *Image `json:"downsized,omitempty"`
	DownsizedLarge         *Image `json:"downsized_large,omitempty"`
	DownsizedMedium        *Image `json:"downsized_medium,omitempty"`
	DownsizedSmall         *Image `json:"downsized_small,omitempty"`
	DownsizedStill         *Image `json:"downsized_still,omitempty"`
	FixedHeight            *Image `json:"fixed_height,omitempty"`
	FixedHeightDownsampled *Image `json:"fixed_height_downsampled,omitempty"`
	FixedHeightSmall       *Image `json:"fixed_height_small,omitempty"`
	FixedHeightSmallStill  *Image `json:"fixed_height_small_still,omitempty"`
	FixedHeightStill       *Image `json:"fixed_height_still,omitempty"`
	FixedWidth             *Image `json:"fixed_width,omitempty"`
	FixedWidthDownsampled  *Image `json:"fixed_width_downsampled,omitempty"`
	FixedWidthSmall        *Image `json:"fixed_width_small,omitempty"`
	FixedWidthSmallStill   *Image `json:"fixed_width_small_still,omitempty"`
	FixedWidthStill        *Image `json:"fixed_width_still,omitempty"`
	Looping                *Image `json:"looping,omitempty"`
	Original               *Image `json:"original,omitempty"`
	OriginalStill          *Image `json:"original_still,omitempty"`
	Preview                *Image `json:"preview,omitempty"`
	PreviewGif             *Image `json:"preview_gif,omitempty"`
}

type GifTypeEnum string

const (
	GifTypeEnumGif GifTypeEnum = "gif"
)

type Gif struct {
	BitlyURL         *string      `json:"bitly_url,omitempty"`
	ContentURL       *string      `json:"content_url,omitempty"`
	CreateDatetime   *time.Time   `json:"create_datetime,omitempty"`
	EmbdedURL        *string      `json:"embded_url,omitempty"`
	FeaturedTags     []string     `json:"featured_tags,omitempty"`
	ID               *string      `json:"id,omitempty"`
	Images           *GifImages   `json:"images,omitempty"`
	ImportDatetime   *time.Time   `json:"import_datetime,omitempty"`
	Rating           *string      `json:"rating,omitempty"`
	Slug             *string      `json:"slug,omitempty"`
	Source           *string      `json:"source,omitempty"`
	SourcePostURL    *string      `json:"source_post_url,omitempty"`
	SourceTld        *string      `json:"source_tld,omitempty"`
	Tags             []string     `json:"tags,omitempty"`
	TrendingDatetime *time.Time   `json:"trending_datetime,omitempty"`
	Type             *GifTypeEnum `json:"type,omitempty"`
	UpdateDatetime   *time.Time   `json:"update_datetime,omitempty"`
	URL              *string      `json:"url,omitempty"`
	User             *User        `json:"user,omitempty"`
	Username         *string      `json:"username,omitempty"`
}
