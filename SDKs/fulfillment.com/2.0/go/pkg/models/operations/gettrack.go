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
	Name *string `json:"name,omitempty"`
}

type GetTrack200ApplicationJSONOriginTypeEnum string

const (
	GetTrack200ApplicationJSONOriginTypeEnumFeature GetTrack200ApplicationJSONOriginTypeEnum = "Feature"
)

type GetTrack200ApplicationJSONOriginFeature struct {
	Bbox       []interface{}                                                                                  `json:"bbox,omitempty"`
	Centerline *shared.OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginPropertiesGeometry `json:"centerline,omitempty"`
	Geometry   GetTrack200ApplicationJSONOriginGeometryGeometry                                               `json:"geometry"`
	ID         *int64                                                                                         `json:"id,omitempty"`
	Properties GetTrack200ApplicationJSONOriginProperties                                                     `json:"properties"`
	Title      *string                                                                                        `json:"title,omitempty"`
	Type       GetTrack200ApplicationJSONOriginTypeEnum                                                       `json:"type"`
}

type GetTrack200ApplicationJSONTrackedEventsEventSourceEnum string

const (
	GetTrack200ApplicationJSONTrackedEventsEventSourceEnumCarrier  GetTrack200ApplicationJSONTrackedEventsEventSourceEnum = "carrier"
	GetTrack200ApplicationJSONTrackedEventsEventSourceEnumInternal GetTrack200ApplicationJSONTrackedEventsEventSourceEnum = "internal"
)

type GetTrack200ApplicationJSONTrackedEventsTrackingEventV2 struct {
	EventCategory     *string                                                                      `json:"eventCategory,omitempty"`
	EventCategoryCode *int64                                                                       `json:"eventCategoryCode,omitempty"`
	EventDateTime     *time.Time                                                                   `json:"eventDateTime,omitempty"`
	EventLocation     *shared.OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin `json:"eventLocation,omitempty"`
	EventSource       *GetTrack200ApplicationJSONTrackedEventsEventSourceEnum                      `json:"eventSource,omitempty"`
	EventStatus       *string                                                                      `json:"eventStatus,omitempty"`
}

type GetTrack200ApplicationJSONTrackingNumberCarrierCarrierSimpleV2 struct {
	ID int64 `json:"id"`
}

type GetTrack200ApplicationJSONTrackingNumberTrackingNumberV2 struct {
	BarcodeScanValue *string                                                         `json:"barcodeScanValue,omitempty"`
	Carrier          *GetTrack200ApplicationJSONTrackingNumberCarrierCarrierSimpleV2 `json:"carrier,omitempty"`
	Value            *string                                                         `json:"value,omitempty"`
}

type GetTrack200ApplicationJSONTrackingResponse struct {
	Destination          *shared.OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin `json:"destination,omitempty"`
	FdcOrderID           *int64                                                                       `json:"fdcOrderId,omitempty"`
	FirstCheckedDateTime *time.Time                                                                   `json:"firstCheckedDateTime,omitempty"`
	FirstTransitEvent    *time.Time                                                                   `json:"firstTransitEvent,omitempty"`
	LastCheckedDateTime  *time.Time                                                                   `json:"lastCheckedDateTime,omitempty"`
	LastUpdatedDateTime  *time.Time                                                                   `json:"lastUpdatedDateTime,omitempty"`
	Origin               *GetTrack200ApplicationJSONOriginFeature                                     `json:"origin,omitempty"`
	Status               *string                                                                      `json:"status,omitempty"`
	StatusCategoryCode   *int64                                                                       `json:"statusCategoryCode,omitempty"`
	StatusDateTime       *time.Time                                                                   `json:"statusDateTime,omitempty"`
	StatusMessage        *string                                                                      `json:"statusMessage,omitempty"`
	TrackedEvents        []GetTrack200ApplicationJSONTrackedEventsTrackingEventV2                     `json:"trackedEvents,omitempty"`
	TrackingNumber       *GetTrack200ApplicationJSONTrackingNumberTrackingNumberV2                    `json:"trackingNumber,omitempty"`
}

type GetTrackResponse struct {
	ContentType      string
	StatusCode       int64
	TrackingResponse *GetTrack200ApplicationJSONTrackingResponse
}
