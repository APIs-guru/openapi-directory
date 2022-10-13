package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteApplicationVpcConfigurationXAmzTargetEnum string

const (
	DeleteApplicationVpcConfigurationXAmzTargetEnumKinesisAnalytics20180523DeleteApplicationVpcConfiguration DeleteApplicationVpcConfigurationXAmzTargetEnum = "KinesisAnalytics_20180523.DeleteApplicationVpcConfiguration"
)

type DeleteApplicationVpcConfigurationHeaders struct {
	XAmzAlgorithm     *string                                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteApplicationVpcConfigurationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteApplicationVpcConfigurationRequest struct {
	Headers DeleteApplicationVpcConfigurationHeaders
	Request shared.DeleteApplicationVpcConfigurationRequest `request:"mediaType=application/json"`
}

type DeleteApplicationVpcConfigurationResponse struct {
	ConcurrentModificationException           *interface{}
	ContentType                               string
	DeleteApplicationVpcConfigurationResponse *shared.DeleteApplicationVpcConfigurationResponse
	InvalidApplicationConfigurationException  *interface{}
	InvalidArgumentException                  *interface{}
	ResourceInUseException                    *interface{}
	ResourceNotFoundException                 *interface{}
	StatusCode                                int64
}
