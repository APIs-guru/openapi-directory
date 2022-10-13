package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeLanguageModelXAmzTargetEnum string

const (
	DescribeLanguageModelXAmzTargetEnumTranscribeDescribeLanguageModel DescribeLanguageModelXAmzTargetEnum = "Transcribe.DescribeLanguageModel"
)

type DescribeLanguageModelHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeLanguageModelXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeLanguageModelRequest struct {
	Headers DescribeLanguageModelHeaders
	Request shared.DescribeLanguageModelRequest `request:"mediaType=application/json"`
}

type DescribeLanguageModelResponse struct {
	BadRequestException           *interface{}
	ContentType                   string
	DescribeLanguageModelResponse *shared.DescribeLanguageModelResponse
	InternalFailureException      *interface{}
	LimitExceededException        *interface{}
	NotFoundException             *interface{}
	StatusCode                    int64
}
