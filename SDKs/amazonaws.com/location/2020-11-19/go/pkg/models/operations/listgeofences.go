package operations

import (
	"openapi/pkg/models/shared"
)

type ListGeofencesPathParams struct {
	CollectionName string `pathParam:"style=simple,explode=false,name=CollectionName"`
}

type ListGeofencesQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListGeofencesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListGeofencesRequestBody struct {
	NextToken *string `json:"NextToken"`
}

type ListGeofencesRequest struct {
	PathParams  ListGeofencesPathParams
	QueryParams ListGeofencesQueryParams
	Headers     ListGeofencesHeaders
	Request     ListGeofencesRequestBody `request:"mediaType=application/json"`
}

type ListGeofencesResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ListGeofencesResponse     *shared.ListGeofencesResponse
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
