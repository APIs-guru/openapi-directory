package operations

import (
	"openapi/pkg/models/shared"
)

type GetResourcePolicyXAmzTargetEnum string

const (
	GetResourcePolicyXAmzTargetEnumSecretsmanagerGetResourcePolicy GetResourcePolicyXAmzTargetEnum = "secretsmanager.GetResourcePolicy"
)

type GetResourcePolicyHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetResourcePolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetResourcePolicyRequest struct {
	Headers GetResourcePolicyHeaders
	Request shared.GetResourcePolicyRequest `request:"mediaType=application/json"`
}

type GetResourcePolicyResponse struct {
	ContentType               string
	GetResourcePolicyResponse *shared.GetResourcePolicyResponse
	InternalServiceError      *interface{}
	InvalidParameterException *interface{}
	InvalidRequestException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
