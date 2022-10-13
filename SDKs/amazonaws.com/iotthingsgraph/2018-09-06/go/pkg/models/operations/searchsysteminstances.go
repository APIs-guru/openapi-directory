package operations

import (
	"openapi/pkg/models/shared"
)

type SearchSystemInstancesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type SearchSystemInstancesXAmzTargetEnum string

const (
	SearchSystemInstancesXAmzTargetEnumIotThingsGraphFrontEndServiceSearchSystemInstances SearchSystemInstancesXAmzTargetEnum = "IotThingsGraphFrontEndService.SearchSystemInstances"
)

type SearchSystemInstancesHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        SearchSystemInstancesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type SearchSystemInstancesRequest struct {
	QueryParams SearchSystemInstancesQueryParams
	Headers     SearchSystemInstancesHeaders
	Request     shared.SearchSystemInstancesRequest `request:"mediaType=application/json"`
}

type SearchSystemInstancesResponse struct {
	ContentType                   string
	InternalFailureException      *interface{}
	InvalidRequestException       *interface{}
	SearchSystemInstancesResponse *shared.SearchSystemInstancesResponse
	StatusCode                    int64
	ThrottlingException           *interface{}
}
