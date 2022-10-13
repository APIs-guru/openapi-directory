package operations

import (
	"openapi/pkg/models/shared"
)

type PutSecretValueXAmzTargetEnum string

const (
	PutSecretValueXAmzTargetEnumSecretsmanagerPutSecretValue PutSecretValueXAmzTargetEnum = "secretsmanager.PutSecretValue"
)

type PutSecretValueHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutSecretValueXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutSecretValueRequest struct {
	Headers PutSecretValueHeaders
	Request shared.PutSecretValueRequest `request:"mediaType=application/json"`
}

type PutSecretValueResponse struct {
	ContentType               string
	EncryptionFailure         *interface{}
	InternalServiceError      *interface{}
	InvalidParameterException *interface{}
	InvalidRequestException   *interface{}
	LimitExceededException    *interface{}
	PutSecretValueResponse    *shared.PutSecretValueResponse
	ResourceExistsException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
