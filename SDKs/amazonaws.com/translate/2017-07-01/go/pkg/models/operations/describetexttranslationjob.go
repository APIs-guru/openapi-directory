package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeTextTranslationJobXAmzTargetEnum string

const (
	DescribeTextTranslationJobXAmzTargetEnumAwsShineFrontendService20170701DescribeTextTranslationJob DescribeTextTranslationJobXAmzTargetEnum = "AWSShineFrontendService_20170701.DescribeTextTranslationJob"
)

type DescribeTextTranslationJobHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeTextTranslationJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeTextTranslationJobRequest struct {
	Headers DescribeTextTranslationJobHeaders
	Request shared.DescribeTextTranslationJobRequest `request:"mediaType=application/json"`
}

type DescribeTextTranslationJobResponse struct {
	ContentType                        string
	DescribeTextTranslationJobResponse *shared.DescribeTextTranslationJobResponse
	InternalServerException            *interface{}
	ResourceNotFoundException          *interface{}
	StatusCode                         int64
	TooManyRequestsException           *interface{}
}
