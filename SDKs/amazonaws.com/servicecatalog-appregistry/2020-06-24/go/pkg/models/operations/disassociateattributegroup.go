package operations

import (
	"openapi/pkg/models/shared"
)

type DisassociateAttributeGroupPathParams struct {
	Application    string `pathParam:"style=simple,explode=false,name=application"`
	AttributeGroup string `pathParam:"style=simple,explode=false,name=attributeGroup"`
}

type DisassociateAttributeGroupHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DisassociateAttributeGroupRequest struct {
	PathParams DisassociateAttributeGroupPathParams
	Headers    DisassociateAttributeGroupHeaders
}

type DisassociateAttributeGroupResponse struct {
	ContentType                        string
	DisassociateAttributeGroupResponse *shared.DisassociateAttributeGroupResponse
	InternalServerException            *interface{}
	ResourceNotFoundException          *interface{}
	StatusCode                         int64
	ValidationException                *interface{}
}
