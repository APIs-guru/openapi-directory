package operations

import (
	"openapi/pkg/models/shared"
)

type TerminateTargetInstancesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type TerminateTargetInstancesRequestBody struct {
	SourceServerIDs []string          `json:"sourceServerIDs"`
	Tags            map[string]string `json:"tags"`
}

type TerminateTargetInstancesRequest struct {
	Headers TerminateTargetInstancesHeaders
	Request TerminateTargetInstancesRequestBody `request:"mediaType=application/json"`
}

type TerminateTargetInstancesResponse struct {
	ConflictException                *interface{}
	ContentType                      string
	StatusCode                       int64
	TerminateTargetInstancesResponse *shared.TerminateTargetInstancesResponse
	UninitializedAccountException    *interface{}
	ValidationException              *interface{}
}
