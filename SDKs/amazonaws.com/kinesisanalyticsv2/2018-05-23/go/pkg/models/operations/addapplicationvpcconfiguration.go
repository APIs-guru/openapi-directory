package operations

import (
	"openapi/pkg/models/shared"
)

type AddApplicationVpcConfigurationXAmzTargetEnum string

const (
	AddApplicationVpcConfigurationXAmzTargetEnumKinesisAnalytics20180523AddApplicationVpcConfiguration AddApplicationVpcConfigurationXAmzTargetEnum = "KinesisAnalytics_20180523.AddApplicationVpcConfiguration"
)

type AddApplicationVpcConfigurationHeaders struct {
	XAmzAlgorithm     *string                                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        AddApplicationVpcConfigurationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
