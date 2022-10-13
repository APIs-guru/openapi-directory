package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteApplicationXAmzTargetEnum string

const (
	DeleteApplicationXAmzTargetEnumKinesisAnalytics20180523DeleteApplication DeleteApplicationXAmzTargetEnum = "KinesisAnalytics_20180523.DeleteApplication"
)

type DeleteApplicationHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteApplicationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteApplicationRequest struct {
	Headers DeleteApplicationHeaders
	Request shared.DeleteApplicationRequest `request:"mediaType=application/json"`
}

type DeleteApplicationResponse struct {
	ConcurrentModificationException          *interface{}
	ContentType                              string
	DeleteApplicationResponse                map[string]interface{}
	InvalidApplicationConfigurationException *interface{}
	InvalidArgumentException                 *interface{}
	InvalidRequestException                  *interface{}
	ResourceInUseException                   *interface{}
	ResourceNotFoundException                *interface{}
	StatusCode                               int64
}
