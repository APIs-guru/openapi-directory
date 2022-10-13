package operations

import (
	"openapi/pkg/models/shared"
)

type ListLanguageModelsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListLanguageModelsXAmzTargetEnum string

const (
	ListLanguageModelsXAmzTargetEnumTranscribeListLanguageModels ListLanguageModelsXAmzTargetEnum = "Transcribe.ListLanguageModels"
)

type ListLanguageModelsHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListLanguageModelsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListLanguageModelsRequest struct {
	QueryParams ListLanguageModelsQueryParams
	Headers     ListLanguageModelsHeaders
	Request     shared.ListLanguageModelsRequest `request:"mediaType=application/json"`
}

type ListLanguageModelsResponse struct {
	BadRequestException        *interface{}
	ContentType                string
	InternalFailureException   *interface{}
	LimitExceededException     *interface{}
	ListLanguageModelsResponse *shared.ListLanguageModelsResponse
	StatusCode                 int64
}
