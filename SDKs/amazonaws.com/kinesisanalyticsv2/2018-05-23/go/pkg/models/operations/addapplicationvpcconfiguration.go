package operations

import (
	"openapi/pkg/models/shared"
)

type AddApplicationVpcConfigurationXAmzTargetEnum string

const (
	AddApplicationVpcConfigurationXAmzTargetEnumKinesisAnalytics20180523AddApplicationVpcConfiguration AddApplicationVpcConfigurationXAmzTargetEnum = "KinesisAnalytics_20180523.AddApplicationVpcConfiguration"
)

type AddApplicationVpcConfigurationHeaders struct {
	XAmzAlgorithm     *string                                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AddApplicationVpcConfigurationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AddApplicationVpcConfigurationRequest struct {
	Headers AddApplicationVpcConfigurationHeaders
	Request shared.AddApplicationVpcConfigurationRequest `request:"mediaType=application/json"`
}

type AddApplicationVpcConfigurationResponse struct {
	AddApplicationVpcConfigurationResponse   *shared.AddApplicationVpcConfigurationResponse
	ConcurrentModificationException          *interface{}
	ContentType                              string
	InvalidApplicationConfigurationException *interface{}
	InvalidArgumentException                 *interface{}
	ResourceInUseException                   *interface{}
	ResourceNotFoundException                *interface{}
	StatusCode                               int64
}
