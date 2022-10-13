package operations

import (
	"openapi/pkg/models/shared"
)

type AddApplicationCloudWatchLoggingOptionXAmzTargetEnum string

const (
	AddApplicationCloudWatchLoggingOptionXAmzTargetEnumKinesisAnalytics20150814AddApplicationCloudWatchLoggingOption AddApplicationCloudWatchLoggingOptionXAmzTargetEnum = "KinesisAnalytics_20150814.AddApplicationCloudWatchLoggingOption"
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
	AddApplicationCloudWatchLoggingOptionResponse map[string]interface{}
	ConcurrentModificationException               *interface{}
	ContentType                                   string
	InvalidArgumentException                      *interface{}
	ResourceInUseException                        *interface{}
	ResourceNotFoundException                     *interface{}
	StatusCode                                    int64
	UnsupportedOperationException                 *interface{}
}
