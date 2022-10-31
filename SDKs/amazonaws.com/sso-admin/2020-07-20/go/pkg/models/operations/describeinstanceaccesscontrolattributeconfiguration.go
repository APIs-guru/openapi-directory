package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeInstanceAccessControlAttributeConfigurationXAmzTargetEnum string

const (
	DescribeInstanceAccessControlAttributeConfigurationXAmzTargetEnumSwbExternalServiceDescribeInstanceAccessControlAttributeConfiguration DescribeInstanceAccessControlAttributeConfigurationXAmzTargetEnum = "SWBExternalService.DescribeInstanceAccessControlAttributeConfiguration"
)

type DescribeInstanceAccessControlAttributeConfigurationHeaders struct {
	XAmzAlgorithm     *string                                                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeInstanceAccessControlAttributeConfigurationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeInstanceAccessControlAttributeConfigurationRequest struct {
	Headers DescribeInstanceAccessControlAttributeConfigurationHeaders
	Request shared.DescribeInstanceAccessControlAttributeConfigurationRequest `request:"mediaType=application/json"`
}

type DescribeInstanceAccessControlAttributeConfigurationResponse struct {
	AccessDeniedException                                       *interface{}
	ContentType                                                 string
	DescribeInstanceAccessControlAttributeConfigurationResponse *shared.DescribeInstanceAccessControlAttributeConfigurationResponse
	InternalServerException                                     *interface{}
	ResourceNotFoundException                                   *interface{}
	StatusCode                                                  int64
	ThrottlingException                                         *interface{}
	ValidationException                                         *interface{}
}
