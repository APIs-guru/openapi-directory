package operations

import (
	"openapi/pkg/models/shared"
)

type ValidateResourcePolicyXAmzTargetEnum string

const (
	ValidateResourcePolicyXAmzTargetEnumSecretsmanagerValidateResourcePolicy ValidateResourcePolicyXAmzTargetEnum = "secretsmanager.ValidateResourcePolicy"
)

type ValidateResourcePolicyHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ValidateResourcePolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ValidateResourcePolicyRequest struct {
	Headers ValidateResourcePolicyHeaders
	Request shared.ValidateResourcePolicyRequest `request:"mediaType=application/json"`
}

type ValidateResourcePolicyResponse struct {
	ContentType                      string
	InternalServiceError             *interface{}
	InvalidParameterException        *interface{}
	InvalidRequestException          *interface{}
	MalformedPolicyDocumentException *interface{}
	ResourceNotFoundException        *interface{}
	StatusCode                       int64
	ValidateResourcePolicyResponse   *shared.ValidateResourcePolicyResponse
}
