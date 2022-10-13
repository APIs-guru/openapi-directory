package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeAccountAssignmentCreationStatusXAmzTargetEnum string

const (
	DescribeAccountAssignmentCreationStatusXAmzTargetEnumSwbExternalServiceDescribeAccountAssignmentCreationStatus DescribeAccountAssignmentCreationStatusXAmzTargetEnum = "SWBExternalService.DescribeAccountAssignmentCreationStatus"
)

type DescribeAccountAssignmentCreationStatusHeaders struct {
	XAmzAlgorithm     *string                                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeAccountAssignmentCreationStatusXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeAccountAssignmentCreationStatusRequest struct {
	Headers DescribeAccountAssignmentCreationStatusHeaders
	Request shared.DescribeAccountAssignmentCreationStatusRequest `request:"mediaType=application/json"`
}

type DescribeAccountAssignmentCreationStatusResponse struct {
	AccessDeniedException                           *interface{}
	ContentType                                     string
	DescribeAccountAssignmentCreationStatusResponse *shared.DescribeAccountAssignmentCreationStatusResponse
	InternalServerException                         *interface{}
	ResourceNotFoundException                       *interface{}
	StatusCode                                      int64
	ThrottlingException                             *interface{}
	ValidationException                             *interface{}
}
