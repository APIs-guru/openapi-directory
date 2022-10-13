package operations

import (
	"openapi/pkg/models/shared"
)

type ListContextsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListContextsXAmzTargetEnum string

const (
	ListContextsXAmzTargetEnumSageMakerListContexts ListContextsXAmzTargetEnum = "SageMaker.ListContexts"
)

type ListContextsHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListContextsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListContextsRequest struct {
	QueryParams ListContextsQueryParams
	Headers     ListContextsHeaders
	Request     shared.ListContextsRequest `request:"mediaType=application/json"`
}

type ListContextsResponse struct {
	ContentType          string
	ListContextsResponse *shared.ListContextsResponse
	ResourceNotFound     *interface{}
	StatusCode           int64
}
