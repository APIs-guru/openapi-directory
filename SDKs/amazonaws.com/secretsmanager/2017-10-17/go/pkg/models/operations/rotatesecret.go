package operations

import (
	"openapi/pkg/models/shared"
)

type RotateSecretXAmzTargetEnum string

const (
	RotateSecretXAmzTargetEnumSecretsmanagerRotateSecret RotateSecretXAmzTargetEnum = "secretsmanager.RotateSecret"
)

type RotateSecretHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RotateSecretXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RotateSecretRequest struct {
	Headers RotateSecretHeaders
	Request shared.RotateSecretRequest `request:"mediaType=application/json"`
}

type RotateSecretResponse struct {
	ContentType               string
	InternalServiceError      *interface{}
	InvalidParameterException *interface{}
	InvalidRequestException   *interface{}
	ResourceNotFoundException *interface{}
	RotateSecretResponse      *shared.RotateSecretResponse
	StatusCode                int64
}
