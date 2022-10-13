package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateSecretXAmzTargetEnum string

const (
	UpdateSecretXAmzTargetEnumSecretsmanagerUpdateSecret UpdateSecretXAmzTargetEnum = "secretsmanager.UpdateSecret"
)

type UpdateSecretHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateSecretXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateSecretRequest struct {
	Headers UpdateSecretHeaders
	Request shared.UpdateSecretRequest `request:"mediaType=application/json"`
}

type UpdateSecretResponse struct {
	ContentType                      string
	EncryptionFailure                *interface{}
	InternalServiceError             *interface{}
	InvalidParameterException        *interface{}
	InvalidRequestException          *interface{}
	LimitExceededException           *interface{}
	MalformedPolicyDocumentException *interface{}
	PreconditionNotMetException      *interface{}
	ResourceExistsException          *interface{}
	ResourceNotFoundException        *interface{}
	StatusCode                       int64
	UpdateSecretResponse             *shared.UpdateSecretResponse
}
