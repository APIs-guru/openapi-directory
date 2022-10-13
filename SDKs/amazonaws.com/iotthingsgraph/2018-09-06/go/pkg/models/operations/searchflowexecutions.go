package operations

import (
	"openapi/pkg/models/shared"
)

type SearchFlowExecutionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type SearchFlowExecutionsXAmzTargetEnum string

const (
	SearchFlowExecutionsXAmzTargetEnumIotThingsGraphFrontEndServiceSearchFlowExecutions SearchFlowExecutionsXAmzTargetEnum = "IotThingsGraphFrontEndService.SearchFlowExecutions"
)

type SearchFlowExecutionsHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        SearchFlowExecutionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type SearchFlowExecutionsRequest struct {
	QueryParams SearchFlowExecutionsQueryParams
	Headers     SearchFlowExecutionsHeaders
	Request     shared.SearchFlowExecutionsRequest `request:"mediaType=application/json"`
}

type SearchFlowExecutionsResponse struct {
	ContentType                  string
	InternalFailureException     *interface{}
	InvalidRequestException      *interface{}
	ResourceNotFoundException    *interface{}
	SearchFlowExecutionsResponse *shared.SearchFlowExecutionsResponse
	StatusCode                   int64
	ThrottlingException          *interface{}
}
