package operations

import (
	"openapi/pkg/models/shared"
)

type PutSecretValueXAmzTargetEnum string

const (
	PutSecretValueXAmzTargetEnumSecretsmanagerPutSecretValue PutSecretValueXAmzTargetEnum = "secretsmanager.PutSecretValue"
)

type PutSecretValueHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        PutSecretValueXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
