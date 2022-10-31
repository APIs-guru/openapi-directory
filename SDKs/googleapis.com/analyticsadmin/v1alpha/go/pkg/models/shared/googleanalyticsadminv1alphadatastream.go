package shared




type GoogleAnalyticsAdminV1alphaDataStreamTypeEnum string

const (
    GoogleAnalyticsAdminV1alphaDataStreamTypeEnumDataStreamTypeUnspecified GoogleAnalyticsAdminV1alphaDataStreamTypeEnum = "DATA_STREAM_TYPE_UNSPECIFIED"
GoogleAnalyticsAdminV1alphaDataStreamTypeEnumWebDataStream GoogleAnalyticsAdminV1alphaDataStreamTypeEnum = "WEB_DATA_STREAM"
GoogleAnalyticsAdminV1alphaDataStreamTypeEnumAndroidAppDataStream GoogleAnalyticsAdminV1alphaDataStreamTypeEnum = "ANDROID_APP_DATA_STREAM"
GoogleAnalyticsAdminV1alphaDataStreamTypeEnumIosAppDataStream GoogleAnalyticsAdminV1alphaDataStreamTypeEnum = "IOS_APP_DATA_STREAM"
)


type GoogleAnalyticsAdminV1alphaDataStream struct {
    AndroidAppStreamData *GoogleAnalyticsAdminV1alphaDataStreamAndroidAppStreamData `json:"androidAppStreamData,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    IosAppStreamData *GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamData `json:"iosAppStreamData,omitempty"`
    Name *string `json:"name,omitempty"`
    Type *GoogleAnalyticsAdminV1alphaDataStreamTypeEnum `json:"type,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    WebStreamData *GoogleAnalyticsAdminV1alphaDataStreamWebStreamData `json:"webStreamData,omitempty"`
    
}

