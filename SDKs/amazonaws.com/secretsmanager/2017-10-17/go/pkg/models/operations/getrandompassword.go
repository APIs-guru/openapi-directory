package operations

import (
	"openapi/pkg/models/shared"
)

type GetRandomPasswordXAmzTargetEnum string

const (
	GetRandomPasswordXAmzTargetEnumSecretsmanagerGetRandomPassword GetRandomPasswordXAmzTargetEnum = "secretsmanager.GetRandomPassword"
)

type GetRandomPasswordHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetRandomPasswordXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetRandomPasswordRequest struct {
	Headers GetRandomPasswordHeaders
	Request shared.GetRandomPasswordRequest `request:"mediaType=application/json"`
}

type GetRandomPasswordResponse struct {
	ContentType               string
	GetRandomPasswordResponse *shared.GetRandomPasswordResponse
	InternalServiceError      *interface{}
	InvalidParameterException *interface{}
	InvalidRequestException   *interface{}
	StatusCode                int64
}
