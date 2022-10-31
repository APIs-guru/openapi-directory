package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAttributeGroupPathParams struct {
	AttributeGroup string `pathParam:"style=simple,explode=false,name=attributeGroup"`
}

type UpdateAttributeGroupHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateAttributeGroupRequestBody struct {
	Attributes  *string `json:"attributes,omitempty"`
	Description *string `json:"description,omitempty"`
	Name        *string `json:"name,omitempty"`
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
