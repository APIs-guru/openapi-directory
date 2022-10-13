package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAttributeGroupPathParams struct {
	AttributeGroup string `pathParam:"style=simple,explode=false,name=attributeGroup"`
}

type UpdateAttributeGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateAttributeGroupRequestBody struct {
	Attributes  *string `json:"attributes"`
	Description *string `json:"description"`
	Name        *string `json:"name"`
}

type UpdateAttributeGroupRequest struct {
	PathParams UpdateAttributeGroupPathParams
	Headers    UpdateAttributeGroupHeaders
	Request    UpdateAttributeGroupRequestBody `request:"mediaType=application/json"`
}

type UpdateAttributeGroupResponse struct {
	ConflictException            *interface{}
	ContentType                  string
	InternalServerException      *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
	UpdateAttributeGroupResponse *shared.UpdateAttributeGroupResponse
	ValidationException          *interface{}
}
