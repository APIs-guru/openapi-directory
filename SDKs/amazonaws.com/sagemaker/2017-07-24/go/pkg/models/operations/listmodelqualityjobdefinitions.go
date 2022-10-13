package operations

import (
	"openapi/pkg/models/shared"
)

type ListModelQualityJobDefinitionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListModelQualityJobDefinitionsXAmzTargetEnum string

const (
	ListModelQualityJobDefinitionsXAmzTargetEnumSageMakerListModelQualityJobDefinitions ListModelQualityJobDefinitionsXAmzTargetEnum = "SageMaker.ListModelQualityJobDefinitions"
)

type ListModelQualityJobDefinitionsHeaders struct {
	XAmzAlgorithm     *string                                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListModelQualityJobDefinitionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListModelQualityJobDefinitionsRequest struct {
	QueryParams ListModelQualityJobDefinitionsQueryParams
	Headers     ListModelQualityJobDefinitionsHeaders
	Request     shared.ListModelQualityJobDefinitionsRequest `request:"mediaType=application/json"`
}

type ListModelQualityJobDefinitionsResponse struct {
	ContentType                            string
	ListModelQualityJobDefinitionsResponse *shared.ListModelQualityJobDefinitionsResponse
	StatusCode                             int64
}
