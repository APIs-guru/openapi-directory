package operations

import (
	"openapi/pkg/models/shared"
)

type AssociateAttributeGroupPathParams struct {
	Application    string `pathParam:"style=simple,explode=false,name=application"`
	AttributeGroup string `pathParam:"style=simple,explode=false,name=attributeGroup"`
}

type AssociateAttributeGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type AssociateAttributeGroupRequest struct {
	PathParams AssociateAttributeGroupPathParams
	Headers    AssociateAttributeGroupHeaders
}

type AssociateAttributeGroupResponse struct {
	AssociateAttributeGroupResponse *shared.AssociateAttributeGroupResponse
	ContentType                     string
	InternalServerException         *interface{}
	ResourceNotFoundException       *interface{}
	ServiceQuotaExceededException   *interface{}
	StatusCode                      int64
	ValidationException             *interface{}
}
