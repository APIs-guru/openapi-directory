package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteApplicationCloudWatchLoggingOptionXAmzTargetEnum string

const (
	DeleteApplicationCloudWatchLoggingOptionXAmzTargetEnumKinesisAnalytics20180523DeleteApplicationCloudWatchLoggingOption DeleteApplicationCloudWatchLoggingOptionXAmzTargetEnum = "KinesisAnalytics_20180523.DeleteApplicationCloudWatchLoggingOption"
)

type DeleteApplicationCloudWatchLoggingOptionHeaders struct {
	XAmzAlgorithm     *string                                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteApplicationCloudWatchLoggingOptionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteApplicationCloudWatchLoggingOptionRequest struct {
	Headers DeleteApplicationCloudWatchLoggingOptionHeaders
	Request shared.DeleteApplicationCloudWatchLoggingOptionRequest `request:"mediaType=application/json"`
}

type DeleteApplicationCloudWatchLoggingOptionResponse struct {
	ConcurrentModificationException                  *interface{}
	ContentType                                      string
	DeleteApplicationCloudWatchLoggingOptionResponse *shared.DeleteApplicationCloudWatchLoggingOptionResponse
	InvalidApplicationConfigurationException         *interface{}
	InvalidArgumentException                         *interface{}
	InvalidRequestException                          *interface{}
	ResourceInUseException                           *interface{}
	ResourceNotFoundException                        *interface{}
	StatusCode                                       int64
}
