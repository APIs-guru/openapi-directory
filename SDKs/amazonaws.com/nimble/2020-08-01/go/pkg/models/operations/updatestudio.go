package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateStudioPathParams struct {
	StudioID string `pathParam:"style=simple,explode=false,name=studioId"`
}

type UpdateStudioHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzClientToken   *string `header:"style=simple,explode=false,name=X-Amz-Client-Token"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateStudioRequestBody struct {
	AdminRoleArn *string `json:"adminRoleArn,omitempty"`
	DisplayName  *string `json:"displayName,omitempty"`
	UserRoleArn  *string `json:"userRoleArn,omitempty"`
}

type UpdateStudioRequest struct {
	PathParams UpdateStudioPathParams
	Headers    UpdateStudioHeaders
	Request    UpdateStudioRequestBody `request:"mediaType=application/json"`
}

type UpdateStudioResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	InternalServerErrorException  *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	UpdateStudioResponse          *shared.UpdateStudioResponse
	ValidationException           *interface{}
}
