package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetTrackQueryParams struct {
	TrackingNumber *string `queryParam:"style=form,explode=true,name=trackingNumber"`
}

type GetTrackRequest struct {
	QueryParams GetTrackQueryParams
}

type GetTrack200ApplicationJSONOriginGeometryTypeEnum string

const (
	GetTrack200ApplicationJSONOriginGeometryTypeEnumPoint           GetTrack200ApplicationJSONOriginGeometryTypeEnum = "Point"
	GetTrack200ApplicationJSONOriginGeometryTypeEnumLineString      GetTrack200ApplicationJSONOriginGeometryTypeEnum = "LineString"
	GetTrack200ApplicationJSONOriginGeometryTypeEnumPolygon         GetTrack200ApplicationJSONOriginGeometryTypeEnum = "Polygon"
	GetTrack200ApplicationJSONOriginGeometryTypeEnumMultiPoint      GetTrack200ApplicationJSONOriginGeometryTypeEnum = "MultiPoint"
	GetTrack200ApplicationJSONOriginGeometryTypeEnumMultiLineString GetTrack200ApplicationJSONOriginGeometryTypeEnum = "MultiLineString"
	GetTrack200ApplicationJSONOriginGeometryTypeEnumMultiPolygon    GetTrack200ApplicationJSONOriginGeometryTypeEnum = "MultiPolygon"
)

type GetTrack200ApplicationJSONOriginGeometryGeometry struct {
	Coordinates interface{}                                      `json:"coordinates"`
	Type        GetTrack200ApplicationJSONOriginGeometryTypeEnum `json:"type"`
}

type GetTrack200ApplicationJSONOriginProperties struct {
	Name *string `json:"name"`
}

type GetTrack200ApplicationJSONOriginTypeEnum string

const (
	GetTrack200ApplicationJSONOriginTypeEnumFeature GetTrack200ApplicationJSONOriginTypeEnum = "Feature"
)

type GetTrack200ApplicationJSONOriginFeature struct {
	Bbox       []interface{}                                                                                  `json:"bbox"`
	Centerline *shared.OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginPropertiesGeometry `json:"centerline"`
	Geometry   GetTrack200ApplicationJSONOriginGeometryGeometry                                               `json:"geometry"`
	ID         *int64                                                                                         `json:"id"`
	Properties GetTrack200ApplicationJSONOriginProperties                                                     `json:"properties"`
	Title      *string                                                                                        `json:"title"`
	Type       GetTrack200ApplicationJSONOriginTypeEnum                                                       `json:"type"`
}

type GetTrack200ApplicationJSONTrackedEventsEventSourceEnum string

const (
	GetTrack200ApplicationJSONTrackedEventsEventSourceEnumCarrier  GetTrack200ApplicationJSONTrackedEventsEventSourceEnum = "carrier"
	GetTrack200ApplicationJSONTrackedEventsEventSourceEnumInternal GetTrack200ApplicationJSONTrackedEventsEventSourceEnum = "internal"
)

type GetTrack200ApplicationJSONTrackedEventsTrackingEventV2 struct {
	EventCategory     *string                                                                      `json:"eventCategory"`
	EventCategoryCode *int64                                                                       `json:"eventCategoryCode"`
	EventDateTime     *time.Time                                                                   `json:"eventDateTime"`
	EventLocation     *shared.OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin `json:"eventLocation"`
	EventSource       *GetTrack200ApplicationJSONTrackedEventsEventSourceEnum                      `json:"eventSource"`
	EventStatus       *string                                                                      `json:"eventStatus"`
}

type GetTrack200ApplicationJSONTrackingNumberCarrierCarrierSimpleV2 struct {
	ID int64 `json:"id"`
}

type GetTrack200ApplicationJSONTrackingNumberTrackingNumberV2 struct {
	BarcodeScanValue *string                                                         `json:"barcodeScanValue"`
	Carrier          *GetTrack200ApplicationJSONTrackingNumberCarrierCarrierSimpleV2 `json:"carrier"`
	Value            *string                                                         `json:"value"`
}

type GetTrack200ApplicationJSONTrackingResponse struct {
	Destination          *shared.OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin `json:"destination"`
	FdcOrderID           *int64                                                                       `json:"fdcOrderId"`
	FirstCheckedDateTime *time.Time                                                                   `json:"firstCheckedDateTime"`
	FirstTransitEvent    *time.Time                                                                   `json:"firstTransitEvent"`
	LastCheckedDateTime  *time.Time                                                                   `json:"lastCheckedDateTime"`
	LastUpdatedDateTime  *time.Time                                                                   `json:"lastUpdatedDateTime"`
	Origin               *GetTrack200ApplicationJSONOriginFeature                                     `json:"origin"`
	Status               *string                                                                      `json:"status"`
	StatusCategoryCode   *int64                                                                       `json:"statusCategoryCode"`
	StatusDateTime       *time.Time                                                                   `json:"statusDateTime"`
	StatusMessage        *string                                                                      `json:"statusMessage"`
	TrackedEvents        []GetTrack200ApplicationJSONTrackedEventsTrackingEventV2                     `json:"trackedEvents"`
	TrackingNumber       *GetTrack200ApplicationJSONTrackingNumberTrackingNumberV2                    `json:"trackingNumber"`
}

type GetTrackResponse struct {
	ContentType      string
	StatusCode       int64
	TrackingResponse *GetTrack200ApplicationJSONTrackingResponse
}
