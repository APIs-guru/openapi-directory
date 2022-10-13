package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAttributeGroupPathParams struct {
	AttributeGroup string `pathParam:"style=simple,explode=false,name=attributeGroup"`
}

type DeleteAttributeGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteAttributeGroupRequest struct {
	PathParams DeleteAttributeGroupPathParams
	Headers    DeleteAttributeGroupHeaders
}

type DeleteAttributeGroupResponse struct {
	ContentType                  string
	DeleteAttributeGroupResponse *shared.DeleteAttributeGroupResponse
	InternalServerException      *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
	ValidationException          *interface{}
}
