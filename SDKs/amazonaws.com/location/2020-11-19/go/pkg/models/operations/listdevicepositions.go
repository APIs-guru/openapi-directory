package operations

import (
	"openapi/pkg/models/shared"
)

type ListDevicePositionsPathParams struct {
	TrackerName string `pathParam:"style=simple,explode=false,name=TrackerName"`
}

type ListDevicePositionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListDevicePositionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListDevicePositionsRequestBody struct {
	MaxResults *int64  `json:"MaxResults,omitempty"`
	NextToken  *string `json:"NextToken,omitempty"`
}

type ListDevicePositionsRequest struct {
	PathParams  ListDevicePositionsPathParams
	QueryParams ListDevicePositionsQueryParams
	Headers     ListDevicePositionsHeaders
	Request     ListDevicePositionsRequestBody `request:"mediaType=application/json"`
}

type ListDevicePositionsResponse struct {
	AccessDeniedException       *interface{}
	ContentType                 string
	InternalServerException     *interface{}
	ListDevicePositionsResponse *shared.ListDevicePositionsResponse
	StatusCode                  int64
	ThrottlingException         *interface{}
	ValidationException         *interface{}
}
