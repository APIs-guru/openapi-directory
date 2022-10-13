package operations

import (
	"openapi/pkg/models/shared"
)

type ListFlowDefinitionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListFlowDefinitionsXAmzTargetEnum string

const (
	ListFlowDefinitionsXAmzTargetEnumSageMakerListFlowDefinitions ListFlowDefinitionsXAmzTargetEnum = "SageMaker.ListFlowDefinitions"
)

type ListFlowDefinitionsHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListFlowDefinitionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListFlowDefinitionsRequest struct {
	QueryParams ListFlowDefinitionsQueryParams
	Headers     ListFlowDefinitionsHeaders
	Request     shared.ListFlowDefinitionsRequest `request:"mediaType=application/json"`
}

type ListFlowDefinitionsResponse struct {
	ContentType                 string
	ListFlowDefinitionsResponse *shared.ListFlowDefinitionsResponse
	StatusCode                  int64
}
