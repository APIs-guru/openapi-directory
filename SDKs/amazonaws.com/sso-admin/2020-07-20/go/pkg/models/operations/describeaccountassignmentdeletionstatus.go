package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeAccountAssignmentDeletionStatusXAmzTargetEnum string

const (
	DescribeAccountAssignmentDeletionStatusXAmzTargetEnumSwbExternalServiceDescribeAccountAssignmentDeletionStatus DescribeAccountAssignmentDeletionStatusXAmzTargetEnum = "SWBExternalService.DescribeAccountAssignmentDeletionStatus"
)

type DescribeAccountAssignmentDeletionStatusHeaders struct {
	XAmzAlgorithm     *string                                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeAccountAssignmentDeletionStatusXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeAccountAssignmentDeletionStatusRequest struct {
	Headers DescribeAccountAssignmentDeletionStatusHeaders
	Request shared.DescribeAccountAssignmentDeletionStatusRequest `request:"mediaType=application/json"`
}

type DescribeAccountAssignmentDeletionStatusResponse struct {
	AccessDeniedException                           *interface{}
	ContentType                                     string
	DescribeAccountAssignmentDeletionStatusResponse *shared.DescribeAccountAssignmentDeletionStatusResponse
	InternalServerException                         *interface{}
	ResourceNotFoundException                       *interface{}
	StatusCode                                      int64
	ThrottlingException                             *interface{}
	ValidationException                             *interface{}
}
