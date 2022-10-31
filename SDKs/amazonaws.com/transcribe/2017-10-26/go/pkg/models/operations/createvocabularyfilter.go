package operations

import (
	"openapi/pkg/models/shared"
)

type CreateVocabularyFilterXAmzTargetEnum string

const (
	CreateVocabularyFilterXAmzTargetEnumTranscribeCreateVocabularyFilter CreateVocabularyFilterXAmzTargetEnum = "Transcribe.CreateVocabularyFilter"
)

type CreateVocabularyFilterHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateVocabularyFilterXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateVocabularyFilterRequest struct {
	Headers CreateVocabularyFilterHeaders
	Request shared.CreateVocabularyFilterRequest `request:"mediaType=application/json"`
}

type CreateVocabularyFilterResponse struct {
	BadRequestException            *interface{}
	ConflictException              *interface{}
	ContentType                    string
	CreateVocabularyFilterResponse *shared.CreateVocabularyFilterResponse
	InternalFailureException       *interface{}
	LimitExceededException         *interface{}
	StatusCode                     int64
}
