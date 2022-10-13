package operations

import (
	"openapi/pkg/models/shared"
)

type AddApplicationCloudWatchLoggingOptionXAmzTargetEnum string

const (
	AddApplicationCloudWatchLoggingOptionXAmzTargetEnumKinesisAnalytics20180523AddApplicationCloudWatchLoggingOption AddApplicationCloudWatchLoggingOptionXAmzTargetEnum = "KinesisAnalytics_20180523.AddApplicationCloudWatchLoggingOption"
)

type AddApplicationCloudWatchLoggingOptionHeaders struct {
	XAmzAlgorithm     *string                                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AddApplicationCloudWatchLoggingOptionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AddApplicationCloudWatchLoggingOptionRequest struct {
	Headers AddApplicationCloudWatchLoggingOptionHeaders
	Request shared.AddApplicationCloudWatchLoggingOptionRequest `request:"mediaType=application/json"`
}

type AddApplicationCloudWatchLoggingOptionResponse struct {
	AddApplicationCloudWatchLoggingOptionResponse *shared.AddApplicationCloudWatchLoggingOptionResponse
	ConcurrentModificationException               *interface{}
	ContentType                                   string
	InvalidApplicationConfigurationException      *interface{}
	InvalidArgumentException                      *interface{}
	InvalidRequestException                       *interface{}
	ResourceInUseException                        *interface{}
	ResourceNotFoundException                     *interface{}
	StatusCode                                    int64
}
