package operations

import (
	"openapi/pkg/models/shared"
)

type DescribePermissionSetProvisioningStatusXAmzTargetEnum string

const (
	DescribePermissionSetProvisioningStatusXAmzTargetEnumSwbExternalServiceDescribePermissionSetProvisioningStatus DescribePermissionSetProvisioningStatusXAmzTargetEnum = "SWBExternalService.DescribePermissionSetProvisioningStatus"
)

type DescribePermissionSetProvisioningStatusHeaders struct {
	XAmzAlgorithm     *string                                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribePermissionSetProvisioningStatusXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribePermissionSetProvisioningStatusRequest struct {
	Headers DescribePermissionSetProvisioningStatusHeaders
	Request shared.DescribePermissionSetProvisioningStatusRequest `request:"mediaType=application/json"`
}

type DescribePermissionSetProvisioningStatusResponse struct {
	AccessDeniedException                           *interface{}
	ContentType                                     string
	DescribePermissionSetProvisioningStatusResponse *shared.DescribePermissionSetProvisioningStatusResponse
	InternalServerException                         *interface{}
	ResourceNotFoundException                       *interface{}
	StatusCode                                      int64
	ThrottlingException                             *interface{}
	ValidationException                             *interface{}
}
