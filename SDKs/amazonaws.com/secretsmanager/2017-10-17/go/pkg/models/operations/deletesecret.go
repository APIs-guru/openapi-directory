package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSecretXAmzTargetEnum string

const (
	DeleteSecretXAmzTargetEnumSecretsmanagerDeleteSecret DeleteSecretXAmzTargetEnum = "secretsmanager.DeleteSecret"
)

type DeleteSecretHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteSecretXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteSecretRequest struct {
	Headers DeleteSecretHeaders
	Request shared.DeleteSecretRequest `request:"mediaType=application/json"`
}

type DeleteSecretResponse struct {
	ContentType               string
	DeleteSecretResponse      *shared.DeleteSecretResponse
	InternalServiceError      *interface{}
	InvalidParameterException *interface{}
	InvalidRequestException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
