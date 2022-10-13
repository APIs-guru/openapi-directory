package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteApplicationCloudWatchLoggingOptionXAmzTargetEnum string

const (
	DeleteApplicationCloudWatchLoggingOptionXAmzTargetEnumKinesisAnalytics20150814DeleteApplicationCloudWatchLoggingOption DeleteApplicationCloudWatchLoggingOptionXAmzTargetEnum = "KinesisAnalytics_20150814.DeleteApplicationCloudWatchLoggingOption"
)

type DeleteApplicationCloudWatchLoggingOptionHeaders struct {
	XAmzAlgorithm     *string                                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteApplicationCloudWatchLoggingOptionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteApplicationCloudWatchLoggingOptionRequest struct {
	Headers DeleteApplicationCloudWatchLoggingOptionHeaders
	Request shared.DeleteApplicationCloudWatchLoggingOptionRequest `request:"mediaType=application/json"`
}

type DeleteApplicationCloudWatchLoggingOptionResponse struct {
	ConcurrentModificationException                  *interface{}
	ContentType                                      string
	DeleteApplicationCloudWatchLoggingOptionResponse map[string]interface{}
	InvalidArgumentException                         *interface{}
	ResourceInUseException                           *interface{}
	ResourceNotFoundException                        *interface{}
	StatusCode                                       int64
	UnsupportedOperationException                    *interface{}
}
