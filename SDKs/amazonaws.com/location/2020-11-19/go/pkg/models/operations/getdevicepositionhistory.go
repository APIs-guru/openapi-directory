package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetDevicePositionHistoryPathParams struct {
	DeviceID    string `pathParam:"style=simple,explode=false,name=DeviceId"`
	TrackerName string `pathParam:"style=simple,explode=false,name=TrackerName"`
}

type GetDevicePositionHistoryQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetDevicePositionHistoryHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDevicePositionHistoryRequestBody struct {
	EndTimeExclusive   *time.Time `json:"EndTimeExclusive"`
	NextToken          *string    `json:"NextToken"`
	StartTimeInclusive *time.Time `json:"StartTimeInclusive"`
}

type GetDevicePositionHistoryRequest struct {
	PathParams  GetDevicePositionHistoryPathParams
	QueryParams GetDevicePositionHistoryQueryParams
	Headers     GetDevicePositionHistoryHeaders
	Request     GetDevicePositionHistoryRequestBody `request:"mediaType=application/json"`
}

type GetDevicePositionHistoryResponse struct {
	AccessDeniedException            *interface{}
	ContentType                      string
	GetDevicePositionHistoryResponse *shared.GetDevicePositionHistoryResponse
	InternalServerException          *interface{}
	ResourceNotFoundException        *interface{}
	StatusCode                       int64
	ThrottlingException              *interface{}
	ValidationException              *interface{}
}
