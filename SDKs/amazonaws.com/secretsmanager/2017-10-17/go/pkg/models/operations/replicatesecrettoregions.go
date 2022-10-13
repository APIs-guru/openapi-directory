package operations

import (
	"openapi/pkg/models/shared"
)

type ReplicateSecretToRegionsXAmzTargetEnum string

const (
	ReplicateSecretToRegionsXAmzTargetEnumSecretsmanagerReplicateSecretToRegions ReplicateSecretToRegionsXAmzTargetEnum = "secretsmanager.ReplicateSecretToRegions"
)

type ReplicateSecretToRegionsHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ReplicateSecretToRegionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ReplicateSecretToRegionsRequest struct {
	Headers ReplicateSecretToRegionsHeaders
	Request shared.ReplicateSecretToRegionsRequest `request:"mediaType=application/json"`
}

type ReplicateSecretToRegionsResponse struct {
	ContentType                      string
	InternalServiceError             *interface{}
	InvalidParameterException        *interface{}
	InvalidRequestException          *interface{}
	ReplicateSecretToRegionsResponse *shared.ReplicateSecretToRegionsResponse
	ResourceNotFoundException        *interface{}
	StatusCode                       int64
}
