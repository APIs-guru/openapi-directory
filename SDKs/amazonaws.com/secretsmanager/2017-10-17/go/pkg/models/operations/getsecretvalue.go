package operations

import (
	"openapi/pkg/models/shared"
)

type GetSecretValueXAmzTargetEnum string

const (
	GetSecretValueXAmzTargetEnumSecretsmanagerGetSecretValue GetSecretValueXAmzTargetEnum = "secretsmanager.GetSecretValue"
)

type GetSecretValueHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetSecretValueXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
