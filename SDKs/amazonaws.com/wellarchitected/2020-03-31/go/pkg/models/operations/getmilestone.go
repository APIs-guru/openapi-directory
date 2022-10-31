package operations

import (
	"openapi/pkg/models/shared"
)

type GetMilestonePathParams struct {
	MilestoneNumber int64  `pathParam:"style=simple,explode=false,name=MilestoneNumber"`
	WorkloadID      string `pathParam:"style=simple,explode=false,name=WorkloadId"`
}

type GetMilestoneHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetMilestoneRequest struct {
	PathParams GetMilestonePathParams
	Headers    GetMilestoneHeaders
}

type GetMilestoneResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	GetMilestoneOutput        *shared.GetMilestoneOutput
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
