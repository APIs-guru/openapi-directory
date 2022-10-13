package operations

import (
	"openapi/pkg/models/shared"
)

type ApproveAssignmentXAmzTargetEnum string

const (
	ApproveAssignmentXAmzTargetEnumMTurkRequesterServiceV20170117ApproveAssignment ApproveAssignmentXAmzTargetEnum = "MTurkRequesterServiceV20170117.ApproveAssignment"
)

type ApproveAssignmentHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ApproveAssignmentXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ApproveAssignmentRequest struct {
	Headers ApproveAssignmentHeaders
	Request shared.ApproveAssignmentRequest `request:"mediaType=application/json"`
}

type ApproveAssignmentResponse struct {
	ApproveAssignmentResponse map[string]interface{}
	ContentType               string
	RequestError              *interface{}
	ServiceFault              *interface{}
	StatusCode                int64
}
