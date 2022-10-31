package operations

import (
	"openapi/pkg/models/shared"
)

type AddApplicationCloudWatchLoggingOptionXAmzTargetEnum string

const (
	AddApplicationCloudWatchLoggingOptionXAmzTargetEnumKinesisAnalytics20180523AddApplicationCloudWatchLoggingOption AddApplicationCloudWatchLoggingOptionXAmzTargetEnum = "KinesisAnalytics_20180523.AddApplicationCloudWatchLoggingOption"
)

type AddApplicationCloudWatchLoggingOptionHeaders struct {
	XAmzAlgorithm     *string                                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        AddApplicationCloudWatchLoggingOptionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
