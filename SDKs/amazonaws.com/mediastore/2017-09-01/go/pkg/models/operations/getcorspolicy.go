package operations

import (
	"openapi/pkg/models/shared"
)

type GetCorsPolicyXAmzTargetEnum string

const (
	GetCorsPolicyXAmzTargetEnumMediaStore20170901GetCorsPolicy GetCorsPolicyXAmzTargetEnum = "MediaStore_20170901.GetCorsPolicy"
)

type GetCorsPolicyHeaders struct {
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetCorsPolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetCorsPolicyRequest struct {
	Headers GetCorsPolicyHeaders
	Request shared.GetCorsPolicyInput `request:"mediaType=application/json"`
}

type GetCorsPolicyResponse struct {
	ContainerInUseException     *interface{}
	ContainerNotFoundException  *interface{}
	ContentType                 string
	CorsPolicyNotFoundException *interface{}
	GetCorsPolicyOutput         *shared.GetCorsPolicyOutput
	InternalServerError         *interface{}
	StatusCode                  int64
}
