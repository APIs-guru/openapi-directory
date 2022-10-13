package shared

type APICoreDtoDatapointsDatapointStatusEnum string

const (
	APICoreDtoDatapointsDatapointStatusEnumActive  APICoreDtoDatapointsDatapointStatusEnum = "Active"
	APICoreDtoDatapointsDatapointStatusEnumPaused  APICoreDtoDatapointsDatapointStatusEnum = "Paused"
	APICoreDtoDatapointsDatapointStatusEnumAbuse   APICoreDtoDatapointsDatapointStatusEnum = "Abuse"
	APICoreDtoDatapointsDatapointStatusEnumDeleted APICoreDtoDatapointsDatapointStatusEnum = "Deleted"
)

type APICoreDtoDatapointsDatapointTypeEnum string

const (
	APICoreDtoDatapointsDatapointTypeEnumTrackingLink  APICoreDtoDatapointsDatapointTypeEnum = "TrackingLink"
	APICoreDtoDatapointsDatapointTypeEnumTrackingPixel APICoreDtoDatapointsDatapointTypeEnum = "TrackingPixel"
)

type APICoreDtoDatapointsDatapoint struct {
	CreationDate         *string                                     `json:"creationDate"`
	EncodeIP             *bool                                       `json:"encodeIp"`
	FifthConversionID    *int64                                      `json:"fifthConversionId"`
	FifthConversionName  *string                                     `json:"fifthConversionName"`
	FirstConversionID    *int64                                      `json:"firstConversionId"`
	FirstConversionName  *string                                     `json:"firstConversionName"`
	FourthConversionID   *int64                                      `json:"fourthConversionId"`
	FourthConversionName *string                                     `json:"fourthConversionName"`
	GroupID              *int64                                      `json:"groupId"`
	GroupName            *string                                     `json:"groupName"`
	ID                   *int64                                      `json:"id"`
	IsPublic             *bool                                       `json:"isPublic"`
	IsSecured            *bool                                       `json:"isSecured"`
	LightTracking        *bool                                       `json:"lightTracking"`
	Name                 *string                                     `json:"name"`
	Notes                *string                                     `json:"notes"`
	Preferred            *bool                                       `json:"preferred"`
	RedirectOnly         *bool                                       `json:"redirectOnly"`
	SecondConversionID   *int64                                      `json:"secondConversionId"`
	SecondConversionName *string                                     `json:"secondConversionName"`
	Status               *APICoreDtoDatapointsDatapointStatusEnum    `json:"status"`
	Tags                 []APICoreDtoTagsTag                         `json:"tags"`
	ThirdConversionID    *int64                                      `json:"thirdConversionId"`
	ThirdConversionName  *string                                     `json:"thirdConversionName"`
	Title                *string                                     `json:"title"`
	TrackingCode         *string                                     `json:"trackingCode"`
	Type                 *APICoreDtoDatapointsDatapointTypeEnum      `json:"type"`
	TypeTl               *APICoreDtoDatapointsTrackingLinkSpecifics  `json:"typeTL"`
	TypeTp               *APICoreDtoDatapointsTrackingPixelSpecifics `json:"typeTP"`
	WritePermited        *bool                                       `json:"writePermited"`
}
