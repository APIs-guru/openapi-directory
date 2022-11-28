package operations

import (
	"openapi/pkg/models/shared"
)

type PutGeofencePathParams struct {
	CollectionName string `pathParam:"style=simple,explode=false,name=CollectionName"`
	GeofenceID     string `pathParam:"style=simple,explode=false,name=GeofenceId"`
}

type PutGeofenceHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// PutGeofenceRequestBodyGeometry
// <p>Contains the geofence geometry details.</p> <note> <p>Amazon Location doesn't currently support polygons with holes, multipolygons, polygons that are wound clockwise, or that cross the antimeridian. </p> </note>
type PutGeofenceRequestBodyGeometry struct {
	Polygon [][][]float64 `json:"Polygon,omitempty"`
}

type PutGeofenceRequestBody struct {
	Geometry PutGeofenceRequestBodyGeometry `json:"Geometry"`
}

type PutGeofenceRequest struct {
	PathParams PutGeofencePathParams
	Headers    PutGeofenceHeaders
	Request    PutGeofenceRequestBody `request:"mediaType=application/json"`
}

type PutGeofenceResponse struct {
	AccessDeniedException     *interface{}
	ConflictException         *interface{}
	ContentType               string
	InternalServerException   *interface{}
	PutGeofenceResponse       *shared.PutGeofenceResponse
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
