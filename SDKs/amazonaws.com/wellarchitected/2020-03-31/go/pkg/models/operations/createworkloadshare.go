package operations

import (
	"openapi/pkg/models/shared"
)

type CreateWorkloadSharePathParams struct {
	WorkloadID string `pathParam:"style=simple,explode=false,name=WorkloadId"`
}

type CreateWorkloadShareHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateWorkloadShareRequestBodyPermissionTypeEnum string

const (
	CreateWorkloadShareRequestBodyPermissionTypeEnumReadonly    CreateWorkloadShareRequestBodyPermissionTypeEnum = "READONLY"
	CreateWorkloadShareRequestBodyPermissionTypeEnumContributor CreateWorkloadShareRequestBodyPermissionTypeEnum = "CONTRIBUTOR"
)

type CreateWorkloadShareRequestBody struct {
	ClientRequestToken string                                           `json:"ClientRequestToken"`
	PermissionType     CreateWorkloadShareRequestBodyPermissionTypeEnum `json:"PermissionType"`
	SharedWith         string                                           `json:"SharedWith"`
}

type CreateWorkloadShareRequest struct {
	PathParams CreateWorkloadSharePathParams
	Headers    CreateWorkloadShareHeaders
	Request    CreateWorkloadShareRequestBody `request:"mediaType=application/json"`
}

type CreateWorkloadShareResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	CreateWorkloadShareOutput     *shared.CreateWorkloadShareOutput
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
