package operations

import (
	"openapi/pkg/models/shared"
)

type ListFunctionsQueryParams struct {
	Marker   *string `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems *int64  `queryParam:"style=form,explode=true,name=MaxItems"`
}

type ListFunctionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListFunctionsRequest struct {
	QueryParams ListFunctionsQueryParams
	Headers     ListFunctionsHeaders
}

type ListFunctionsResponse struct {
	ContentType           string
	ListFunctionsResponse *shared.ListFunctionsResponse
	ServiceException      *shared.ServiceException
	StatusCode            int64
}
