package operations

import (
	"openapi/pkg/models/shared"
)

type DeregisterResourceXAmzTargetEnum string

const (
	DeregisterResourceXAmzTargetEnumAwsLakeFormationDeregisterResource DeregisterResourceXAmzTargetEnum = "AWSLakeFormation.DeregisterResource"
)

type DeregisterResourceHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeregisterResourceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeregisterResourceRequest struct {
	Headers DeregisterResourceHeaders
	Request shared.DeregisterResourceRequest `request:"mediaType=application/json"`
}

type DeregisterResourceResponse struct {
	ContentType                string
	DeregisterResourceResponse map[string]interface{}
	EntityNotFoundException    *interface{}
	InternalServiceException   *interface{}
	InvalidInputException      *interface{}
	OperationTimeoutException  *interface{}
	StatusCode                 int64
}
