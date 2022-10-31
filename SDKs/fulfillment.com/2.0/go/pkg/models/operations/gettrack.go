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

type GetTrackTrackingResponseFeatureGeometryTypeEnum string

const (
	GetTrackTrackingResponseFeatureGeometryTypeEnumPoint           GetTrackTrackingResponseFeatureGeometryTypeEnum = "Point"
	GetTrackTrackingResponseFeatureGeometryTypeEnumLineString      GetTrackTrackingResponseFeatureGeometryTypeEnum = "LineString"
	GetTrackTrackingResponseFeatureGeometryTypeEnumPolygon         GetTrackTrackingResponseFeatureGeometryTypeEnum = "Polygon"
	GetTrackTrackingResponseFeatureGeometryTypeEnumMultiPoint      GetTrackTrackingResponseFeatureGeometryTypeEnum = "MultiPoint"
	GetTrackTrackingResponseFeatureGeometryTypeEnumMultiLineString GetTrackTrackingResponseFeatureGeometryTypeEnum = "MultiLineString"
	GetTrackTrackingResponseFeatureGeometryTypeEnumMultiPolygon    GetTrackTrackingResponseFeatureGeometryTypeEnum = "MultiPolygon"
)

type GetTrackTrackingResponseFeatureGeometry struct {
	Coordinates interface{}                                     `json:"coordinates"`
	Type        GetTrackTrackingResponseFeatureGeometryTypeEnum `json:"type"`
}

type GetTrackTrackingResponseFeatureProperties struct {
	Name *string `json:"name,omitempty"`
}

type GetTrackTrackingResponseFeatureTypeEnum string

const (
	GetTrackTrackingResponseFeatureTypeEnumFeature GetTrackTrackingResponseFeatureTypeEnum = "Feature"
)

type GetTrackTrackingResponseFeature struct {
	Bbox       []interface{}                                                                                  `json:"bbox,omitempty"`
	Centerline *shared.OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginPropertiesGeometry `json:"centerline,omitempty"`
	Geometry   GetTrackTrackingResponseFeatureGeometry                                                        `json:"geometry"`
	ID         *int64                                                                                         `json:"id,omitempty"`
	Properties GetTrackTrackingResponseFeatureProperties                                                      `json:"properties"`
	Title      *string                                                                                        `json:"title,omitempty"`
	Type       GetTrackTrackingResponseFeatureTypeEnum                                                        `json:"type"`
}

type GetTrackTrackingResponseTrackingEventV2EventSourceEnum string

const (
	GetTrackTrackingResponseTrackingEventV2EventSourceEnumCarrier  GetTrackTrackingResponseTrackingEventV2EventSourceEnum = "carrier"
	GetTrackTrackingResponseTrackingEventV2EventSourceEnumInternal GetTrackTrackingResponseTrackingEventV2EventSourceEnum = "internal"
)

type GetTrackTrackingResponseTrackingEventV2 struct {
	EventCategory     *string                                                                      `json:"eventCategory,omitempty"`
	EventCategoryCode *int64                                                                       `json:"eventCategoryCode,omitempty"`
	EventDateTime     *time.Time                                                                   `json:"eventDateTime,omitempty"`
	EventLocation     *shared.OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin `json:"eventLocation,omitempty"`
	EventSource       *GetTrackTrackingResponseTrackingEventV2EventSourceEnum                      `json:"eventSource,omitempty"`
	EventStatus       *string                                                                      `json:"eventStatus,omitempty"`
}

type GetTrackTrackingResponseTrackingNumberV2CarrierSimpleV2 struct {
	ID int64 `json:"id"`
}

type GetTrackTrackingResponseTrackingNumberV2 struct {
	BarcodeScanValue *string                                                  `json:"barcodeScanValue,omitempty"`
	Carrier          *GetTrackTrackingResponseTrackingNumberV2CarrierSimpleV2 `json:"carrier,omitempty"`
	Value            *string                                                  `json:"value,omitempty"`
}

type GetTrackTrackingResponse struct {
	Destination          *shared.OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin `json:"destination,omitempty"`
	FdcOrderID           *int64                                                                       `json:"fdcOrderId,omitempty"`
	FirstCheckedDateTime *time.Time                                                                   `json:"firstCheckedDateTime,omitempty"`
	FirstTransitEvent    *time.Time                                                                   `json:"firstTransitEvent,omitempty"`
	LastCheckedDateTime  *time.Time                                                                   `json:"lastCheckedDateTime,omitempty"`
	LastUpdatedDateTime  *time.Time                                                                   `json:"lastUpdatedDateTime,omitempty"`
	Origin               *GetTrackTrackingResponseFeature                                             `json:"origin,omitempty"`
	Status               *string                                                                      `json:"status,omitempty"`
	StatusCategoryCode   *int64                                                                       `json:"statusCategoryCode,omitempty"`
	StatusDateTime       *time.Time                                                                   `json:"statusDateTime,omitempty"`
	StatusMessage        *string                                                                      `json:"statusMessage,omitempty"`
	TrackedEvents        []GetTrackTrackingResponseTrackingEventV2                                    `json:"trackedEvents,omitempty"`
	TrackingNumber       *GetTrackTrackingResponseTrackingNumberV2                                    `json:"trackingNumber,omitempty"`
}

type GetTrackResponse struct {
	ContentType      string
	StatusCode       int64
	TrackingResponse *GetTrackTrackingResponse
}
