package shared

import (
	"time"
)

type VideosForXMLEnclosureTypeEnum string

const (
	VideosForXMLEnclosureTypeEnumApplicationXBittorrent VideosForXMLEnclosureTypeEnum = "application/x-bittorrent"
)

// VideosForXMLEnclosure
// main streamable file for the video
type VideosForXMLEnclosure struct {
	Length *int64
	Type   *VideosForXMLEnclosureTypeEnum
	URL    *string
}

type VideosForXMLMediaCommunityMediaStatistics struct {
	Views *int64
}

// VideosForXMLMediaCommunity
// see [media:community](https://www.rssboard.org/media-rss#media-community) (MRSS)
type VideosForXMLMediaCommunity struct {
	MediaStatistics *VideosForXMLMediaCommunityMediaStatistics
}

type VideosForXMLMediaEmbed struct {
	URL *string
}

type VideosForXMLMediaPlayer struct {
	URL *string
}

type VideosForXMLMediaRatingEnum string

const (
	VideosForXMLMediaRatingEnumNonadult VideosForXMLMediaRatingEnum = "nonadult"
	VideosForXMLMediaRatingEnumAdult    VideosForXMLMediaRatingEnum = "adult"
)

type VideosForXMLMediaThumbnail struct {
	Height *int64
	URL    *string
	Width  *int64
}

type VideosForXML struct {
	ContentEncoded   *string
	DcCreator        *string
	Description      *string
	Enclosure        *VideosForXMLEnclosure
	GUID             *string
	Link             *string
	MediaCategory    *int64
	MediaCommunity   *VideosForXMLMediaCommunity
	MediaDescription *string
	MediaEmbed       *VideosForXMLMediaEmbed
	MediaGroup       []interface{}
	MediaPlayer      *VideosForXMLMediaPlayer
	MediaRating      *VideosForXMLMediaRatingEnum
	MediaThumbnail   *VideosForXMLMediaThumbnail
	MediaTitle       *string
	PubDate          *time.Time
}
