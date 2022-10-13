package operations

import (
	"openapi/pkg/models/shared"
)

type SearchFlowTemplatesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type SearchFlowTemplatesXAmzTargetEnum string

const (
	SearchFlowTemplatesXAmzTargetEnumIotThingsGraphFrontEndServiceSearchFlowTemplates SearchFlowTemplatesXAmzTargetEnum = "IotThingsGraphFrontEndService.SearchFlowTemplates"
)

type SearchFlowTemplatesHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        SearchFlowTemplatesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type SearchFlowTemplatesRequest struct {
	QueryParams SearchFlowTemplatesQueryParams
	Headers     SearchFlowTemplatesHeaders
	Request     shared.SearchFlowTemplatesRequest `request:"mediaType=application/json"`
}

type SearchFlowTemplatesResponse struct {
	ContentType                 string
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	SearchFlowTemplatesResponse *shared.SearchFlowTemplatesResponse
	StatusCode                  int64
	ThrottlingException         *interface{}
}
