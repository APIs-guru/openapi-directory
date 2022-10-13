package operations

import (
	"openapi/pkg/models/shared"
)

type GetAttributeGroupPathParams struct {
	AttributeGroup string `pathParam:"style=simple,explode=false,name=attributeGroup"`
}

type GetAttributeGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetAttributeGroupRequest struct {
	PathParams GetAttributeGroupPathParams
	Headers    GetAttributeGroupHeaders
}

type GetAttributeGroupResponse struct {
	ContentType               string
	GetAttributeGroupResponse *shared.GetAttributeGroupResponse
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
