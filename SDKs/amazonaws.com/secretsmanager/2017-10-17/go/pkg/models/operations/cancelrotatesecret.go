package operations

import (
	"openapi/pkg/models/shared"
)

type CancelRotateSecretXAmzTargetEnum string

const (
	CancelRotateSecretXAmzTargetEnumSecretsmanagerCancelRotateSecret CancelRotateSecretXAmzTargetEnum = "secretsmanager.CancelRotateSecret"
)

type CancelRotateSecretHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CancelRotateSecretXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CancelRotateSecretRequest struct {
	Headers CancelRotateSecretHeaders
	Request shared.CancelRotateSecretRequest `request:"mediaType=application/json"`
}

type CancelRotateSecretResponse struct {
	CancelRotateSecretResponse *shared.CancelRotateSecretResponse
	ContentType                string
	InternalServiceError       *interface{}
	InvalidParameterException  *interface{}
	InvalidRequestException    *interface{}
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
}
