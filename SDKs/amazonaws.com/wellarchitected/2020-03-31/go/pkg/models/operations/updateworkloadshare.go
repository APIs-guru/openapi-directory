package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateWorkloadSharePathParams struct {
	ShareID    string `pathParam:"style=simple,explode=false,name=ShareId"`
	WorkloadID string `pathParam:"style=simple,explode=false,name=WorkloadId"`
}

type UpdateWorkloadShareHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateWorkloadShareRequestBodyPermissionTypeEnum string

const (
	UpdateWorkloadShareRequestBodyPermissionTypeEnumReadonly    UpdateWorkloadShareRequestBodyPermissionTypeEnum = "READONLY"
	UpdateWorkloadShareRequestBodyPermissionTypeEnumContributor UpdateWorkloadShareRequestBodyPermissionTypeEnum = "CONTRIBUTOR"
)

type UpdateWorkloadShareRequestBody struct {
	PermissionType UpdateWorkloadShareRequestBodyPermissionTypeEnum `json:"PermissionType"`
}

type UpdateWorkloadShareRequest struct {
	PathParams UpdateWorkloadSharePathParams
	Headers    UpdateWorkloadShareHeaders
	Request    UpdateWorkloadShareRequestBody `request:"mediaType=application/json"`
}

type UpdateWorkloadShareResponse struct {
	AccessDeniedException     *interface{}
	ConflictException         *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	UpdateWorkloadShareOutput *shared.UpdateWorkloadShareOutput
	ValidationException       *interface{}
}
