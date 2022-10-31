package operations

import (
	"openapi/pkg/models/shared"
)

type ReplicateSecretToRegionsXAmzTargetEnum string

const (
	ReplicateSecretToRegionsXAmzTargetEnumSecretsmanagerReplicateSecretToRegions ReplicateSecretToRegionsXAmzTargetEnum = "secretsmanager.ReplicateSecretToRegions"
)

type ReplicateSecretToRegionsHeaders struct {
	XAmzAlgorithm     *string                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ReplicateSecretToRegionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
