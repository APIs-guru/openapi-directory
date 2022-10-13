package shared

type MediaFileDeliveryTypeEnum string

const (
	MediaFileDeliveryTypeEnumStream      MediaFileDeliveryTypeEnum = "Stream"
	MediaFileDeliveryTypeEnumProgressive MediaFileDeliveryTypeEnum = "Progressive"
	MediaFileDeliveryTypeEnumDownload    MediaFileDeliveryTypeEnum = "Download"
)

type MediaFileResolutionEnum1 string

const (
	MediaFileResolutionEnum1Sd       MediaFileResolutionEnum1 = "SD"
	MediaFileResolutionEnum1Hd720    MediaFileResolutionEnum1 = "HD-720"
	MediaFileResolutionEnum1Hd1080   MediaFileResolutionEnum1 = "HD-1080"
	MediaFileResolutionEnum1Hd4K     MediaFileResolutionEnum1 = "HD-4K"
	MediaFileResolutionEnum1External MediaFileResolutionEnum1 = "External"
	MediaFileResolutionEnum1Unknown  MediaFileResolutionEnum1 = "Unknown"
)

type MediaFile struct {
	Channels     *int32                    `json:"channels"`
	DeliveryType MediaFileDeliveryTypeEnum `json:"deliveryType"`
	Drm          string                    `json:"drm"`
	Format       string                    `json:"format"`
	Height       int32                     `json:"height"`
	Language     string                    `json:"language"`
	Name         string                    `json:"name"`
	Resolution   MediaFileResolutionEnum1  `json:"resolution"`
	URL          string                    `json:"url"`
	Width        int32                     `json:"width"`
}
