package operations

import (
	"openapi/pkg/models/shared"
)

type StopApplicationXAmzTargetEnum string

const (
	StopApplicationXAmzTargetEnumKinesisAnalytics20180523StopApplication StopApplicationXAmzTargetEnum = "KinesisAnalytics_20180523.StopApplication"
)

type StopApplicationHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StopApplicationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StopApplicationRequest struct {
	Headers StopApplicationHeaders
	Request shared.StopApplicationRequest `request:"mediaType=application/json"`
}

type StopApplicationResponse struct {
	ConcurrentModificationException          *interface{}
	ContentType                              string
	InvalidApplicationConfigurationException *interface{}
	InvalidArgumentException                 *interface{}
	InvalidRequestException                  *interface{}
	ResourceInUseException                   *interface{}
	ResourceNotFoundException                *interface{}
	StatusCode                               int64
	StopApplicationResponse                  map[string]interface{}
}
