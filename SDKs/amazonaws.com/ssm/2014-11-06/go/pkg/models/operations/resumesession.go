package operations

import (
	"openapi/pkg/models/shared"
)

type ResumeSessionXAmzTargetEnum string

const (
	ResumeSessionXAmzTargetEnumAmazonSsmResumeSession ResumeSessionXAmzTargetEnum = "AmazonSSM.ResumeSession"
)

type ResumeSessionHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ResumeSessionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ResumeSessionRequest struct {
	Headers ResumeSessionHeaders
	Request shared.ResumeSessionRequest `request:"mediaType=application/json"`
}

type ResumeSessionResponse struct {
	ContentType           string
	DoesNotExistException *interface{}
	InternalServerError   *interface{}
	ResumeSessionResponse *shared.ResumeSessionResponse
	StatusCode            int64
}
