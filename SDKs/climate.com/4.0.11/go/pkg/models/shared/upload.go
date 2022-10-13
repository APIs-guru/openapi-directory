package shared

type UploadContentTypeEnum string

const (
	UploadContentTypeEnumApplicationVndClimateFieldGeojson UploadContentTypeEnum = "application/vnd.climate.field.geojson"
	UploadContentTypeEnumImageVndClimateThermalGeotiff     UploadContentTypeEnum = "image/vnd.climate.thermal.geotiff"
	UploadContentTypeEnumImageVndClimateNdviGeotiff        UploadContentTypeEnum = "image/vnd.climate.ndvi.geotiff"
	UploadContentTypeEnumImageVndClimateWaterstressGeotiff UploadContentTypeEnum = "image/vnd.climate.waterstress.geotiff"
	UploadContentTypeEnumImageVndClimateElevationGeotiff   UploadContentTypeEnum = "image/vnd.climate.elevation.geotiff"
	UploadContentTypeEnumImageVndClimateRawGeotiff         UploadContentTypeEnum = "image/vnd.climate.raw.geotiff"
	UploadContentTypeEnumImageVndClimateRgbGeotiff         UploadContentTypeEnum = "image/vnd.climate.rgb.geotiff"
)

type Upload struct {
	ContentType UploadContentTypeEnum  `json:"contentType"`
	Length      int64                  `json:"length"`
	Md5         string                 `json:"md5"`
	Metadata    map[string]interface{} `json:"metadata"`
}
