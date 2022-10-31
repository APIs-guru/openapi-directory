package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeLanguageModelXAmzTargetEnum string

const (
	DescribeLanguageModelXAmzTargetEnumTranscribeDescribeLanguageModel DescribeLanguageModelXAmzTargetEnum = "Transcribe.DescribeLanguageModel"
)

type DescribeLanguageModelHeaders struct {
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeLanguageModelXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
