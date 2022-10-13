package operations

import (
	"openapi/pkg/models/shared"
)

type ListImageVersionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListImageVersionsXAmzTargetEnum string

const (
	ListImageVersionsXAmzTargetEnumSageMakerListImageVersions ListImageVersionsXAmzTargetEnum = "SageMaker.ListImageVersions"
)

type ListImageVersionsHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListImageVersionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListImageVersionsRequest struct {
	QueryParams ListImageVersionsQueryParams
	Headers     ListImageVersionsHeaders
	Request     shared.ListImageVersionsRequest `request:"mediaType=application/json"`
}

type ListImageVersionsResponse struct {
	ContentType               string
	ListImageVersionsResponse *shared.ListImageVersionsResponse
	ResourceNotFound          *interface{}
	StatusCode                int64
}
