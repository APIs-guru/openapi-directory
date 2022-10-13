package operations

import (
	"openapi/pkg/models/shared"
)

type ListFlowExecutionMessagesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListFlowExecutionMessagesXAmzTargetEnum string

const (
	ListFlowExecutionMessagesXAmzTargetEnumIotThingsGraphFrontEndServiceListFlowExecutionMessages ListFlowExecutionMessagesXAmzTargetEnum = "IotThingsGraphFrontEndService.ListFlowExecutionMessages"
)

type ListFlowExecutionMessagesHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListFlowExecutionMessagesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListFlowExecutionMessagesRequest struct {
	QueryParams ListFlowExecutionMessagesQueryParams
	Headers     ListFlowExecutionMessagesHeaders
	Request     shared.ListFlowExecutionMessagesRequest `request:"mediaType=application/json"`
}

type ListFlowExecutionMessagesResponse struct {
	ContentType                       string
	InternalFailureException          *interface{}
	InvalidRequestException           *interface{}
	ListFlowExecutionMessagesResponse *shared.ListFlowExecutionMessagesResponse
	ResourceNotFoundException         *interface{}
	StatusCode                        int64
	ThrottlingException               *interface{}
}
