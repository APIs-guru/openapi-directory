package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeInstanceAccessControlAttributeConfigurationXAmzTargetEnum string

const (
	DescribeInstanceAccessControlAttributeConfigurationXAmzTargetEnumSwbExternalServiceDescribeInstanceAccessControlAttributeConfiguration DescribeInstanceAccessControlAttributeConfigurationXAmzTargetEnum = "SWBExternalService.DescribeInstanceAccessControlAttributeConfiguration"
)

type DescribeInstanceAccessControlAttributeConfigurationHeaders struct {
	XAmzAlgorithm     *string                                                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeInstanceAccessControlAttributeConfigurationXAmzTargetEnum `header:"name=X-Amz-Target"`
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
