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
	CreationDate         *string                                     `json:"creationDate,omitempty"`
	EncodeIP             *bool                                       `json:"encodeIp,omitempty"`
	FifthConversionID    *int64                                      `json:"fifthConversionId,omitempty"`
	FifthConversionName  *string                                     `json:"fifthConversionName,omitempty"`
	FirstConversionID    *int64                                      `json:"firstConversionId,omitempty"`
	FirstConversionName  *string                                     `json:"firstConversionName,omitempty"`
	FourthConversionID   *int64                                      `json:"fourthConversionId,omitempty"`
	FourthConversionName *string                                     `json:"fourthConversionName,omitempty"`
	GroupID              *int64                                      `json:"groupId,omitempty"`
	GroupName            *string                                     `json:"groupName,omitempty"`
	ID                   *int64                                      `json:"id,omitempty"`
	IsPublic             *bool                                       `json:"isPublic,omitempty"`
	IsSecured            *bool                                       `json:"isSecured,omitempty"`
	LightTracking        *bool                                       `json:"lightTracking,omitempty"`
	Name                 *string                                     `json:"name,omitempty"`
	Notes                *string                                     `json:"notes,omitempty"`
	Preferred            *bool                                       `json:"preferred,omitempty"`
	RedirectOnly         *bool                                       `json:"redirectOnly,omitempty"`
	SecondConversionID   *int64                                      `json:"secondConversionId,omitempty"`
	SecondConversionName *string                                     `json:"secondConversionName,omitempty"`
	Status               *APICoreDtoDatapointsDatapointStatusEnum    `json:"status,omitempty"`
	Tags                 []APICoreDtoTagsTag                         `json:"tags,omitempty"`
	ThirdConversionID    *int64                                      `json:"thirdConversionId,omitempty"`
	ThirdConversionName  *string                                     `json:"thirdConversionName,omitempty"`
	Title                *string                                     `json:"title,omitempty"`
	TrackingCode         *string                                     `json:"trackingCode,omitempty"`
	Type                 *APICoreDtoDatapointsDatapointTypeEnum      `json:"type,omitempty"`
	TypeTl               *APICoreDtoDatapointsTrackingLinkSpecifics  `json:"typeTL,omitempty"`
	TypeTp               *APICoreDtoDatapointsTrackingPixelSpecifics `json:"typeTP,omitempty"`
	WritePermited        *bool                                       `json:"writePermited,omitempty"`
}
