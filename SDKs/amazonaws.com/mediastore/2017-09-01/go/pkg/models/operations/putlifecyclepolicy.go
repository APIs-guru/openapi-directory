package operations

import (
	"openapi/pkg/models/shared"
)

type PutLifecyclePolicyXAmzTargetEnum string

const (
	PutLifecyclePolicyXAmzTargetEnumMediaStore20170901PutLifecyclePolicy PutLifecyclePolicyXAmzTargetEnum = "MediaStore_20170901.PutLifecyclePolicy"
)

type PutLifecyclePolicyHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        PutLifecyclePolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type PutLifecyclePolicyRequest struct {
	Headers PutLifecyclePolicyHeaders
	Request shared.PutLifecyclePolicyInput `request:"mediaType=application/json"`
}

type PutLifecyclePolicyResponse struct {
	ContainerInUseException    *interface{}
	ContainerNotFoundException *interface{}
	ContentType                string
	InternalServerError        *interface{}
	PutLifecyclePolicyOutput   map[string]interface{}
	StatusCode                 int64
}
