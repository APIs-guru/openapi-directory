package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeSecretXAmzTargetEnum string

const (
	DescribeSecretXAmzTargetEnumSecretsmanagerDescribeSecret DescribeSecretXAmzTargetEnum = "secretsmanager.DescribeSecret"
)

type DescribeSecretHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeSecretXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeSecretRequest struct {
	Headers DescribeSecretHeaders
	Request shared.DescribeSecretRequest `request:"mediaType=application/json"`
}

type DescribeSecretResponse struct {
	ContentType               string
	DescribeSecretResponse    *shared.DescribeSecretResponse
	InternalServiceError      *interface{}
	InvalidParameterException *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
