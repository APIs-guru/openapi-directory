package operations

import (
	"openapi/pkg/models/shared"
)

type CreateApplicationXAmzTargetEnum string

const (
	CreateApplicationXAmzTargetEnumKinesisAnalytics20150814CreateApplication CreateApplicationXAmzTargetEnum = "KinesisAnalytics_20150814.CreateApplication"
)

type CreateApplicationHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateApplicationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateApplicationRequest struct {
	Headers CreateApplicationHeaders
	Request shared.CreateApplicationRequest `request:"mediaType=application/json"`
}

type CreateApplicationResponse struct {
	CodeValidationException         *interface{}
	ConcurrentModificationException *interface{}
	ContentType                     string
	CreateApplicationResponse       *shared.CreateApplicationResponse
	InvalidArgumentException        *interface{}
	LimitExceededException          *interface{}
	ResourceInUseException          *interface{}
	StatusCode                      int64
	TooManyTagsException            *interface{}
}
