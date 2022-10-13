package operations

import (
	"openapi/pkg/models/shared"
)

type AddApplicationInputProcessingConfigurationXAmzTargetEnum string

const (
	AddApplicationInputProcessingConfigurationXAmzTargetEnumKinesisAnalytics20180523AddApplicationInputProcessingConfiguration AddApplicationInputProcessingConfigurationXAmzTargetEnum = "KinesisAnalytics_20180523.AddApplicationInputProcessingConfiguration"
)

type AddApplicationInputProcessingConfigurationHeaders struct {
	XAmzAlgorithm     *string                                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AddApplicationInputProcessingConfigurationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AddApplicationInputProcessingConfigurationRequest struct {
	Headers AddApplicationInputProcessingConfigurationHeaders
	Request shared.AddApplicationInputProcessingConfigurationRequest `request:"mediaType=application/json"`
}

type AddApplicationInputProcessingConfigurationResponse struct {
	AddApplicationInputProcessingConfigurationResponse *shared.AddApplicationInputProcessingConfigurationResponse
	ConcurrentModificationException                    *interface{}
	ContentType                                        string
	InvalidArgumentException                           *interface{}
	InvalidRequestException                            *interface{}
	ResourceInUseException                             *interface{}
	ResourceNotFoundException                          *interface{}
	StatusCode                                         int64
}
