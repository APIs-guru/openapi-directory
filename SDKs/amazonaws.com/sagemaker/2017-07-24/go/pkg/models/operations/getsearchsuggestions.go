package operations

import (
	"openapi/pkg/models/shared"
)

type GetSearchSuggestionsXAmzTargetEnum string

const (
	GetSearchSuggestionsXAmzTargetEnumSageMakerGetSearchSuggestions GetSearchSuggestionsXAmzTargetEnum = "SageMaker.GetSearchSuggestions"
)

type GetSearchSuggestionsHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetSearchSuggestionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetSearchSuggestionsRequest struct {
	Headers GetSearchSuggestionsHeaders
	Request shared.GetSearchSuggestionsRequest `request:"mediaType=application/json"`
}

type GetSearchSuggestionsResponse struct {
	ContentType                  string
	GetSearchSuggestionsResponse *shared.GetSearchSuggestionsResponse
	StatusCode                   int64
}
