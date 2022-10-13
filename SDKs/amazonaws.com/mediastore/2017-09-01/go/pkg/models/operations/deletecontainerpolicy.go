package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteContainerPolicyXAmzTargetEnum string

const (
	DeleteContainerPolicyXAmzTargetEnumMediaStore20170901DeleteContainerPolicy DeleteContainerPolicyXAmzTargetEnum = "MediaStore_20170901.DeleteContainerPolicy"
)

type DeleteContainerPolicyHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteContainerPolicyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteContainerPolicyRequest struct {
	Headers DeleteContainerPolicyHeaders
	Request shared.DeleteContainerPolicyInput `request:"mediaType=application/json"`
}

type DeleteContainerPolicyResponse struct {
	ContainerInUseException     *interface{}
	ContainerNotFoundException  *interface{}
	ContentType                 string
	DeleteContainerPolicyOutput map[string]interface{}
	InternalServerError         *interface{}
	PolicyNotFoundException     *interface{}
	StatusCode                  int64
}
