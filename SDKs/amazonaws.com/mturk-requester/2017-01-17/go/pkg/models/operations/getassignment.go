package operations

import (
	"openapi/pkg/models/shared"
)

type GetAssignmentXAmzTargetEnum string

const (
	GetAssignmentXAmzTargetEnumMTurkRequesterServiceV20170117GetAssignment GetAssignmentXAmzTargetEnum = "MTurkRequesterServiceV20170117.GetAssignment"
)

type GetAssignmentHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetAssignmentXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetAssignmentRequest struct {
	Headers GetAssignmentHeaders
	Request shared.GetAssignmentRequest `request:"mediaType=application/json"`
}

type GetAssignmentResponse struct {
	ContentType           string
	GetAssignmentResponse *shared.GetAssignmentResponse
	RequestError          *interface{}
	ServiceFault          *interface{}
	StatusCode            int64
}
