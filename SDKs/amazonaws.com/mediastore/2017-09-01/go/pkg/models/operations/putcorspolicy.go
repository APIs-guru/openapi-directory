package operations

import (
	"openapi/pkg/models/shared"
)

type PutCorsPolicyXAmzTargetEnum string

const (
	PutCorsPolicyXAmzTargetEnumMediaStore20170901PutCorsPolicy PutCorsPolicyXAmzTargetEnum = "MediaStore_20170901.PutCorsPolicy"
)

type PutCorsPolicyHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutCorsPolicyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutCorsPolicyRequest struct {
	Headers PutCorsPolicyHeaders
	Request shared.PutCorsPolicyInput `request:"mediaType=application/json"`
}

type PutCorsPolicyResponse struct {
	ContainerInUseException    *interface{}
	ContainerNotFoundException *interface{}
	ContentType                string
	InternalServerError        *interface{}
	PutCorsPolicyOutput        map[string]interface{}
	StatusCode                 int64
}
