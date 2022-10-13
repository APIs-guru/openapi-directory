package operations

import (
	"openapi/pkg/models/shared"
)

type DescribePermissionSetXAmzTargetEnum string

const (
	DescribePermissionSetXAmzTargetEnumSwbExternalServiceDescribePermissionSet DescribePermissionSetXAmzTargetEnum = "SWBExternalService.DescribePermissionSet"
)

type DescribePermissionSetHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribePermissionSetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribePermissionSetRequest struct {
	Headers DescribePermissionSetHeaders
	Request shared.DescribePermissionSetRequest `request:"mediaType=application/json"`
}

type DescribePermissionSetResponse struct {
	AccessDeniedException         *interface{}
	ContentType                   string
	DescribePermissionSetResponse *shared.DescribePermissionSetResponse
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
