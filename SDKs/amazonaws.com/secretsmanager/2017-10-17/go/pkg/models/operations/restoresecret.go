package operations

import (
	"openapi/pkg/models/shared"
)

type RestoreSecretXAmzTargetEnum string

const (
	RestoreSecretXAmzTargetEnumSecretsmanagerRestoreSecret RestoreSecretXAmzTargetEnum = "secretsmanager.RestoreSecret"
)

type RestoreSecretHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RestoreSecretXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RestoreSecretRequest struct {
	Headers RestoreSecretHeaders
	Request shared.RestoreSecretRequest `request:"mediaType=application/json"`
}

type RestoreSecretResponse struct {
	ContentType               string
	InternalServiceError      *interface{}
	InvalidParameterException *interface{}
	InvalidRequestException   *interface{}
	ResourceNotFoundException *interface{}
	RestoreSecretResponse     *shared.RestoreSecretResponse
	StatusCode                int64
}
