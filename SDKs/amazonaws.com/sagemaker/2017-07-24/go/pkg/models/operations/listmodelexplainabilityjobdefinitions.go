package operations

import (
	"openapi/pkg/models/shared"
)

type ListModelExplainabilityJobDefinitionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListModelExplainabilityJobDefinitionsXAmzTargetEnum string

const (
	ListModelExplainabilityJobDefinitionsXAmzTargetEnumSageMakerListModelExplainabilityJobDefinitions ListModelExplainabilityJobDefinitionsXAmzTargetEnum = "SageMaker.ListModelExplainabilityJobDefinitions"
)

type ListModelExplainabilityJobDefinitionsHeaders struct {
	XAmzAlgorithm     *string                                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListModelExplainabilityJobDefinitionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListModelExplainabilityJobDefinitionsRequest struct {
	QueryParams ListModelExplainabilityJobDefinitionsQueryParams
	Headers     ListModelExplainabilityJobDefinitionsHeaders
	Request     shared.ListModelExplainabilityJobDefinitionsRequest `request:"mediaType=application/json"`
}

type ListModelExplainabilityJobDefinitionsResponse struct {
	ContentType                                   string
	ListModelExplainabilityJobDefinitionsResponse *shared.ListModelExplainabilityJobDefinitionsResponse
	StatusCode                                    int64
}
