package shared

import (
	"time"
)

type GifImages struct {
	Downsized              *Image `json:"downsized"`
	DownsizedLarge         *Image `json:"downsized_large"`
	DownsizedMedium        *Image `json:"downsized_medium"`
	DownsizedSmall         *Image `json:"downsized_small"`
	DownsizedStill         *Image `json:"downsized_still"`
	FixedHeight            *Image `json:"fixed_height"`
	FixedHeightDownsampled *Image `json:"fixed_height_downsampled"`
	FixedHeightSmall       *Image `json:"fixed_height_small"`
	FixedHeightSmallStill  *Image `json:"fixed_height_small_still"`
	FixedHeightStill       *Image `json:"fixed_height_still"`
	FixedWidth             *Image `json:"fixed_width"`
	FixedWidthDownsampled  *Image `json:"fixed_width_downsampled"`
	FixedWidthSmall        *Image `json:"fixed_width_small"`
	FixedWidthSmallStill   *Image `json:"fixed_width_small_still"`
	FixedWidthStill        *Image `json:"fixed_width_still"`
	Looping                *Image `json:"looping"`
	Original               *Image `json:"original"`
	OriginalStill          *Image `json:"original_still"`
	Preview                *Image `json:"preview"`
	PreviewGif             *Image `json:"preview_gif"`
}

type GifTypeEnum string

const (
	GifTypeEnumGif GifTypeEnum = "gif"
)

type Gif struct {
	BitlyURL         *string      `json:"bitly_url"`
	ContentURL       *string      `json:"content_url"`
	CreateDatetime   *time.Time   `json:"create_datetime"`
	EmbdedURL        *string      `json:"embded_url"`
	FeaturedTags     []string     `json:"featured_tags"`
	ID               *string      `json:"id"`
	Images           *GifImages   `json:"images"`
	ImportDatetime   *time.Time   `json:"import_datetime"`
	Rating           *string      `json:"rating"`
	Slug             *string      `json:"slug"`
	Source           *string      `json:"source"`
	SourcePostURL    *string      `json:"source_post_url"`
	SourceTld        *string      `json:"source_tld"`
	Tags             []string     `json:"tags"`
	TrendingDatetime *time.Time   `json:"trending_datetime"`
	Type             *GifTypeEnum `json:"type"`
	UpdateDatetime   *time.Time   `json:"update_datetime"`
	URL              *string      `json:"url"`
	User             *User        `json:"user"`
	Username         *string      `json:"username"`
}
