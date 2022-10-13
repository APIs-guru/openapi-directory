package operations

import (
	"openapi/pkg/models/shared"
)

type GetSecretValueXAmzTargetEnum string

const (
	GetSecretValueXAmzTargetEnumSecretsmanagerGetSecretValue GetSecretValueXAmzTargetEnum = "secretsmanager.GetSecretValue"
)

type GetSecretValueHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetSecretValueXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetSecretValueRequest struct {
	Headers GetSecretValueHeaders
	Request shared.GetSecretValueRequest `request:"mediaType=application/json"`
}

type GetSecretValueResponse struct {
	ContentType               string
	DecryptionFailure         *interface{}
	GetSecretValueResponse    *shared.GetSecretValueResponse
	InternalServiceError      *interface{}
	InvalidParameterException *interface{}
	InvalidRequestException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
