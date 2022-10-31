package operations

import (
	"openapi/pkg/models/shared"
)

type ListEventSourceMappingsQueryParams struct {
	EventSourceArn *string `queryParam:"style=form,explode=true,name=EventSourceArn"`
	FunctionName   *string `queryParam:"style=form,explode=true,name=FunctionName"`
	Marker         *string `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems       *int64  `queryParam:"style=form,explode=true,name=MaxItems"`
}

type ListEventSourceMappingsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListEventSourceMappingsRequest struct {
	QueryParams ListEventSourceMappingsQueryParams
	Headers     ListEventSourceMappingsHeaders
}

type ListEventSourceMappingsResponse struct {
	ContentType                     string
	InvalidParameterValueException  *interface{}
	ListEventSourceMappingsResponse *shared.ListEventSourceMappingsResponse
	ResourceNotFoundException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	TooManyRequestsException        *interface{}
}
