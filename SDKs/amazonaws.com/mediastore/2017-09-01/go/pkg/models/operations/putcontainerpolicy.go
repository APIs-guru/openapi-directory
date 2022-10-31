package operations

import (
	"openapi/pkg/models/shared"
)

type PutContainerPolicyXAmzTargetEnum string

const (
	PutContainerPolicyXAmzTargetEnumMediaStore20170901PutContainerPolicy PutContainerPolicyXAmzTargetEnum = "MediaStore_20170901.PutContainerPolicy"
)

type PutContainerPolicyHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        PutContainerPolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type PutContainerPolicyRequest struct {
	Headers PutContainerPolicyHeaders
	Request shared.PutContainerPolicyInput `request:"mediaType=application/json"`
}

type PutContainerPolicyResponse struct {
	ContainerInUseException    *interface{}
	ContainerNotFoundException *interface{}
	ContentType                string
	InternalServerError        *interface{}
	PutContainerPolicyOutput   map[string]interface{}
	StatusCode                 int64
}
