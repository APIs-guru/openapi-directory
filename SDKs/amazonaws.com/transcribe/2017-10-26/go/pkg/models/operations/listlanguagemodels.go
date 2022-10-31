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
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListLanguageModelsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
