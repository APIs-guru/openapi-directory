package operations

import (
	"openapi/pkg/models/shared"
)

type ListVocabulariesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListVocabulariesXAmzTargetEnum string

const (
	ListVocabulariesXAmzTargetEnumTranscribeListVocabularies ListVocabulariesXAmzTargetEnum = "Transcribe.ListVocabularies"
)

type ListVocabulariesHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListVocabulariesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListVocabulariesRequest struct {
	QueryParams ListVocabulariesQueryParams
	Headers     ListVocabulariesHeaders
	Request     shared.ListVocabulariesRequest `request:"mediaType=application/json"`
}

type ListVocabulariesResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	InternalFailureException *interface{}
	LimitExceededException   *interface{}
	ListVocabulariesResponse *shared.ListVocabulariesResponse
	StatusCode               int64
}
