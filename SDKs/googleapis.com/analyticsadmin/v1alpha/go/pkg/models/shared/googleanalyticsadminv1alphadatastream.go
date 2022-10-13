package shared

type GoogleAnalyticsAdminV1alphaDataStreamTypeEnum string

const (
	GoogleAnalyticsAdminV1alphaDataStreamTypeEnumDataStreamTypeUnspecified GoogleAnalyticsAdminV1alphaDataStreamTypeEnum = "DATA_STREAM_TYPE_UNSPECIFIED"
	GoogleAnalyticsAdminV1alphaDataStreamTypeEnumWebDataStream             GoogleAnalyticsAdminV1alphaDataStreamTypeEnum = "WEB_DATA_STREAM"
	GoogleAnalyticsAdminV1alphaDataStreamTypeEnumAndroidAppDataStream      GoogleAnalyticsAdminV1alphaDataStreamTypeEnum = "ANDROID_APP_DATA_STREAM"
	GoogleAnalyticsAdminV1alphaDataStreamTypeEnumIosAppDataStream          GoogleAnalyticsAdminV1alphaDataStreamTypeEnum = "IOS_APP_DATA_STREAM"
)

type GoogleAnalyticsAdminV1alphaDataStream struct {
	AndroidAppStreamData *GoogleAnalyticsAdminV1alphaDataStreamAndroidAppStreamData `json:"androidAppStreamData"`
	CreateTime           *string                                                    `json:"createTime"`
	DisplayName          *string                                                    `json:"displayName"`
	IosAppStreamData     *GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamData     `json:"iosAppStreamData"`
	Name                 *string                                                    `json:"name"`
	Type                 *GoogleAnalyticsAdminV1alphaDataStreamTypeEnum             `json:"type"`
	UpdateTime           *string                                                    `json:"updateTime"`
	WebStreamData        *GoogleAnalyticsAdminV1alphaDataStreamWebStreamData        `json:"webStreamData"`
}
